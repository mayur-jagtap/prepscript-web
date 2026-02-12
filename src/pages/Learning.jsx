import CategoryCard from "../components/ui/CategoryCard";
import { useEffect, useState } from "react";
import { apiGet } from "../lib/api";
import "../styles/learning.css";

function Learning() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const isCategoryFeatured = (cat) => Boolean(cat.featured ?? cat.isFeatured);

  useEffect(() => {
    apiGet("/categories")
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.error("Failed to load categories", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ color: "var(--foreground)" }}>Loading...</p>;
  }
  const featuredCategories = categories.filter(isCategoryFeatured);
  
  const otherCategories = categories.filter((cat) => !isCategoryFeatured(cat));

  return (
    <div className="learning-page">
      {/* Hero */}
      <section className="learning-hero">
        <h1>Start Learning</h1>
        <p>Choose a track and level up your skills with structured content.</p>
      </section>

      {/* Recommended */}
      <section className="featured-track">
        {featuredCategories.map((cat) => (
          <CategoryCard
            variant="featured"
            key={cat.slug}
            title={cat.title}
            subtitle={cat.description}
            link={`/category/${cat.slug}/problems`}
          />
        ))}
      </section>

      {/* All Tracks */}
      <section className="all-tracks">
        <h2>All Learning Tracks</h2>
        <div className="tracks-grid">
          {otherCategories.map((cat) => (
            <CategoryCard
              key={cat.slug}
              title={cat.title}
              subtitle={cat.description}
              link={`/category/${cat.slug}/problems`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Learning;
