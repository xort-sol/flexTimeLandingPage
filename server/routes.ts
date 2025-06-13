import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get available time slots for a specific date and location
  app.get("/api/availability", async (req, res) => {
    try {
      const { date, location } = req.query;
      
      if (!date || !location) {
        return res.status(400).json({ message: "Date and location are required" });
      }

      const bookings = await storage.getBookingsByDate(date as string);
      const bookedSlots = bookings.map(booking => booking.timeSlot);
      
      // Available time slots (in production, this would be more dynamic)
      const allSlots = [
        "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
        "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"
      ];
      
      const availableSlots = allSlots.map(slot => ({
        time: slot,
        available: !bookedSlots.includes(slot)
      }));

      res.json(availableSlots);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch availability" });
    }
  });

  // Create a new booking
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      
      // Check if the time slot is still available
      const existingBookings = await storage.getBookingsByDate(validatedData.date);
      const isSlotTaken = existingBookings.some(
        booking => booking.timeSlot === validatedData.timeSlot
      );
      
      if (isSlotTaken) {
        return res.status(409).json({ message: "Time slot is no longer available" });
      }

      const booking = await storage.createBooking(validatedData);
      res.status(201).json(booking);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid booking data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to create booking" });
    }
  });

  // Get all bookings
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });

  // Create a contact message
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json(message);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid contact data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
