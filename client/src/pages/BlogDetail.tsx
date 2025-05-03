import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { Blob } from "@/components/ui/blob";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[] | null;
  imageUrl: string;
  readTime: string | null;
  date: string;
  createdAt: string;
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  // Fetch the blog post details
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['/api/blog', slug],
    select: (data: any) => data as BlogPost
  });
  
  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Convert markdown content to HTML (simple version)
  const formatContent = (content: string) => {
    if (!content) return "";
    
    // Split the content by line breaks
    const lines = content.split('\n');
    
    // Process each line
    return lines.map((line, index) => {
      // Headings
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold my-6">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold my-5">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold my-4">{line.substring(4)}</h3>;
      }
      
      // Lists
      if (line.match(/^- /)) {
        return <li key={index} className="ml-6 list-disc my-1">{line.substring(2)}</li>;
      }
      
      // Empty lines
      if (line.trim() === '') {
        return <br key={index} />;
      }
      
      // Regular paragraphs
      return <p key={index} className="my-3">{line}</p>;
    });
  };
  
  return (
    <div className="min-h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-xl text-gray-600">Loading article...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-96">
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-4">Error loading article.</p>
            <Link href="/blog">
              <Button>Return to Blog</Button>
            </Link>
          </div>
        </div>
      ) : post ? (
        <>
          {/* Hero Section */}
          <section className="relative py-20 bg-white overflow-hidden">
            <Blob className="absolute -top-32 -right-32 text-primary/10 w-96 h-96 rotate-45" />
            <Blob className="absolute -bottom-32 -left-32 text-[#20b2aa]/10 w-80 h-80 -rotate-45" />
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto">
                <Link href="/blog">
                  <Button variant="ghost" className="mb-6 text-primary-700 hover:text-[#f39c12] transition-colors">
                    <ChevronLeft className="h-4 w-4 mr-1" /> Back to Blog
                  </Button>
                </Link>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-primary-50 text-primary-700 border-primary-200">
                      {post.category}
                    </Badge>
                    {post.tags && post.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h1>
                  
                  <div className="flex items-center gap-4 text-gray-600 mb-8">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{formatDate(post.date)}</span>
                    {post.readTime && (
                      <>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Featured Image */}
          <div 
            className="w-full h-96 bg-cover bg-center mb-12" 
            style={{ 
              backgroundImage: `url(${post.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Article Content */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto prose prose-lg">
                {formatContent(post.content)}
              </div>
              
              <div className="max-w-3xl mx-auto mt-16 border-t border-gray-200 pt-8">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
                    <div className="flex gap-4 mt-2">
                      <Button variant="outline" size="sm">Twitter</Button>
                      <Button variant="outline" size="sm">LinkedIn</Button>
                      <Button variant="outline" size="sm">Facebook</Button>
                    </div>
                  </div>
                  
                  <Link href="/blog">
                    <Button className="bg-primary-600 hover:bg-primary-700">
                      Read More Articles
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="flex justify-center items-center h-96">
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-4">Article not found.</p>
            <Link href="/blog">
              <Button>Return to Blog</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}