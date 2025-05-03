import React, { useState, useEffect } from "react";

// Define the Article type
interface Article {
  id: number;
  title: string;
  image: string;
  summary: string;
  url: string;
}

const NewsSection: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        if (!apiKey) throw new Error("API Key is missing!");

        const url = `https://gnews.io/api/v4/search?q=deepfake OR "AI fraud" OR "Generative AI fraud" OR "voice cloning" OR "Fintech fraud" OR "identity theft" OR "identity fraud"&lang=en&sortby=publishedAt&apikey=${apiKey}`;
        
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        if (data.articles) {
          const latestArticles = data.articles
            .slice(0, 10)
            .map((article: any, idx: number) => ({
              id: idx,
              title: article.title,
              image: article.image || "/api/placeholder/400/320",
              summary: article.description || "No description available.",
              url: article.url,
            }));
          setArticles(latestArticles);
          setCurrentArticle(latestArticles[0]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
    // Fetch news every 6 hours
    const interval = setInterval(fetchNews, 21600000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      // Auto-slide through articles every 9 seconds
      const slideInterval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % articles.length);
      }, 9000);
      return () => clearInterval(slideInterval);
    }
  }, [articles]);

  useEffect(() => {
    if (articles.length > 0) {
      setCurrentArticle(articles[index]);
    }
  }, [index, articles]);

  return (
    <section className="py-10 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">
          AI & Deepfake Fraud News
        </h2>
        <p className="text-base text-gray-600 mb-6 text-center">
          Stay updated on the latest AI fraud and deepfake misuse cases affecting society.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          {currentArticle && (
            <div className="flex-grow lg:flex-[2] p-4 bg-white rounded-lg shadow-md text-center flex flex-col items-center">
              <img
                src={currentArticle.image}
                alt={currentArticle.title}
                className="max-w-full h-auto max-h-96 object-cover rounded-lg mb-4 mx-auto block"
              />
              <h3 className="text-xl font-bold my-1 text-gray-900">
                {currentArticle.title}
              </h3>
              <p className="text-sm text-gray-700">
                {currentArticle.summary}
              </p>
              <a
                href={currentArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-cyan-400 font-bold transition-colors hover:text-purple-800"
              >
                Read More
              </a>
            </div>
          )}
          
          <div className="flex-grow lg:flex-1 lg:border-l-2 lg:border-gray-200 lg:pl-4 w-full lg:max-h-96 overflow-y-auto">
            {articles.map((article, idx) => (
              <div
                key={article.id}
                className="p-3 cursor-pointer bg-cyan-100 hover:bg-white transition-colors text-left mb-2 rounded"
                onClick={() => setIndex(idx)}
              >
                <h4 className="text-base font-bold my-1 text-gray-800">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {article.summary.split(" ").slice(0, 10).join(" ")}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;