import React, { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
}

const TechFeed: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("https://dev.to/api/articles?tag=technology");
        if (!res.ok) throw new Error("Failed to fetch articles");

        const data = await res.json();
        setArticles(data.slice(0, 3)); // show only 3 articles
      } catch (err) {
        console.error("Article fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Loading tech articles...</p>;
  if (error) return <p>Unable to load articles. Please try later.</p>;

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Latest <span className="highlight">Tech Articles</span></h2>

      <div style={styles.grid}>
        {articles.map((article) => (
          <div key={article.id} style={styles.card}>
           

            <h3 style={styles.title}>{article.title}</h3>

            <p style={styles.description}>
              {article.description ? article.description.slice(0, 80) : "Tech article by Dev.to"}...
            </p>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// Inline styles
const styles = {
  section: {
    padding: "40px 20px",
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "28px",
    fontWeight: 600,
    marginBottom: "20px",
    
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#1a1a3a",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    textAlign: "left" as const,
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover" as const,
    borderRadius: "10px",
  },
  title: {
    fontSize: "20px",
    marginTop: "10px",
    fontWeight: 600,
    color: "#a78bfa",
  },
  description: {
    fontSize: "14px",
    opacity: 0.7,
    marginTop: "6px",
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    color: "white",
    background: "#007bff",
    padding: "10px 16px",
    borderRadius: "6px",
    textDecoration: "none",
  },
};

export default TechFeed;

