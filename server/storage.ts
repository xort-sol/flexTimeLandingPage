import { users, bookings, contactMessages, type User, type InsertUser, type Booking, type InsertBooking, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
  getBookingsByDate(date: string): Promise<Booking[]>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private bookings: Map<number, Booking>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentBookingId: number;
  private currentMessageId: number;

  constructor() {
    this.users = new Map();
    this.bookings = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentBookingId = 1;
    this.currentMessageId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const booking: Booking = {
      ...insertBooking,
      id,
      status: "pending",
      createdAt: new Date(),
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getBookingsByDate(date: string): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(
      (booking) => booking.date === date
    );
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
