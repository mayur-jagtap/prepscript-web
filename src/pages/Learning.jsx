import CategoryCard from "../components/ui/CategoryCard";
import "../styles/learning.css";

const categories = [
  {
    title: "Data Structures & Algorithms",
    subtitle: "Master DSA from basics to advanced",
    link: "/dsa",
  },
  {
    title: "Web Development",
    subtitle: "Learn modern frontend & backend",
    link: "/web",
  },
  {
    title: "System Design",
    subtitle: "Master HLD from basics to advanced",
    link: "/system-design",
  },
];

function Learning() {
  return (
    <div className="learning-page">
      {/* Hero */}
      <section className="learning-hero">
        <h1>Start Learning</h1>
        <p>Choose a track and level up your skills with structured content.</p>
      </section>

      {/* Recommended */}
      <section className="featured-track">
        <CategoryCard
          title="System Design"
          subtitle="Crack HLD interviews with structured content"
          link="/category/system-design/problems"
          variant="featured"
        />
      </section>

      {/* All Tracks */}
      <section className="all-tracks">
        <h2>All Learning Tracks</h2>
        <div className="tracks-grid">
          {categories.map((cat, index) => (
            <CategoryCard key={index} {...cat} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Learning;
