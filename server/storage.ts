import { contactSubmissions, type ContactSubmission, type InsertContactSubmission, type BlogPost } from "@shared/schema";

export class HardcodedStorage {
  private contactSubmissions: Map<number, ContactSubmission>;
  private blogPosts: Map<number, BlogPost>;
  private contactId: number;
  private blogId: number;

  constructor() {
    this.contactSubmissions = new Map();
    this.blogPosts = new Map();
    this.contactId = 1;
    this.blogId = 1;
    this.initializeBlogPosts(); // Initialize hardcoded blog posts
  }

  private initializeBlogPosts() {
    const hardcodedPosts: BlogPost[] = [
      {
        id: 1,
        title: "Deepfakes, AI-Generated Media & Why You Need to Care in 2025",
        slug: "deepfakes-ai-generated-media-why-you-need-to-care-in-2025",
        excerpt: "In a world where artificial intelligence is advancing faster than ever, one question looms large: Can you still trust what you see and hear?",
        content: `# Deepfakes, AI-Generated Media & Why You Need to Care in 2025 ... (your content)`,
        author: "Tarini Sai Padmanabhuni",
        category: "Security",
        tags: ["Deepfake", "AI", "Security", "Digital Trust", "Fraud Prevention"],
        imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000",
        readTime: "5 min read",
        date: "2025-04-07T10:00:00.000Z",
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        title: "New Study Reveals Alarming Rise in Deepfake-Based Identity Theft",
        slug: "new-study-reveals-alarming-rise-in-deepfake-based-identity-theft",
        excerpt: "A recent study by the Global Cybersecurity Alliance shows a 300% increase in identity theft cases using deepfake technology in the past year.",
        content: `# New Study Reveals Alarming Rise in Deepfake-Based Identity Theft ... (your content)`,
        author: "Alex Carter",
        category: "News",
        tags: ["Identity Theft", "Deepfake", "Cybersecurity", "Fraud"],
        imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000",
        readTime: "4 min read",
        date: "2025-04-12T10:00:00.000Z",
        createdAt: new Date().toISOString(),
      },
      // Add more blog posts here...
    ];

    hardcodedPosts.forEach((post) => {
      this.blogPosts.set(post.id, post);
    });
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactId++;
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      message: submission.message || null,
      createdAt: new Date().toISOString(),
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const posts = Array.from(this.blogPosts.values());
    return posts.find((post) => post.slug === slug);
  }
}

export const storage = new HardcodedStorage();