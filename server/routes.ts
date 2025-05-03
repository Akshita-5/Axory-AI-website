import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertBlogPostSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const contactSubmission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ 
        message: "Contact form submitted successfully", 
        id: contactSubmission.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error handling contact form submission:", error);
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  // Get all contact submissions endpoint (admin could use this)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      console.error("Error retrieving contact submissions:", error);
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  });
  
  // Blog post endpoints
  app.post("/api/blog", async (req: Request, res: Response) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const blogPost = await storage.createBlogPost(validatedData);
      res.status(201).json({ 
        message: "Blog post created successfully", 
        id: blogPost.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error creating blog post:", error);
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });
  
  app.get("/api/blog", async (_req: Request, res: Response) => {
    try {
      const posts = await storage.getBlogPosts();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error retrieving blog posts:", error);
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  });
  
  app.get("/api/blog/:slug", async (req: Request, res: Response) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Blog post not found" });
      }
    } catch (error) {
      console.error("Error retrieving blog post:", error);
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
