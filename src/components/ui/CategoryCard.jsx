import { Link } from "react-router-dom";

function CategoryCard({ title, subtitle, link, variant }) {
  return (
    <div className={`category-card ${variant === "featured" ? "featured" : ""}`}>
      {variant === "featured" && (
        <span className="recommended-badge">Recommended</span>
      )}

      <h2 className="category-title">{title}</h2>
      <p className="category-subtitle">{subtitle}</p>

      <Link to={link}>
        <button className="start-btn">Start Learning</button>
      </Link>
    </div>
  );
}

export default CategoryCard;
