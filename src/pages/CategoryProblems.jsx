import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../lib/api";
import { Link } from "react-router-dom";

function CategoryProblems() {
  const { slug } = useParams();

  const [sections, setSections] = useState([]);
  const [sectionId, setSectionId] = useState(null);
  const [problems, setProblems] = useState([]);

  const [randomIndex, setRandomIndex] = useState(null);
  const [checked, setChecked] = useState([]);

  /* 1️⃣ Load sections */
  useEffect(() => {
    apiGet(`/categories/${slug}/sections`)
      .then((data) => {
        console.log("Loaded sections:", data);
        setSections(data);
        if (data.length > 0) {
          setSectionId(data[0].id); // default first section
        }
      })
      .catch(console.error);
  }, [slug]);

  /* 2️⃣ Load problems for selected section */
  useEffect(() => {
    if (!sectionId) return;

    apiGet(`/sections/${sectionId}/problems`)
      .then((data) => {
        console.log("Loaded problems:", data);
        setProblems(data);
        setChecked(Array.from({ length: data.length }, () => false));
        setRandomIndex(null);
      })
      .catch(console.error);
  }, [sectionId]);

  /* Progress calculations */
  const completedCount = useMemo(
    () => checked.reduce((acc, val) => acc + (val ? 1 : 0), 0),
    [checked]
  );

  const totalCount = checked.length;
  const progressPercent =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const visibleProblemIndexes = useMemo(() => {
    if (randomIndex === null) return problems.map((_, i) => i);
    return [randomIndex];
  }, [randomIndex, problems]);

  return (
    <div className="category-problems-page">
      {/* Top Controls */}
      <div className={`top-bar ${randomIndex !== null ? "random-mode" : ""}`}>
        {randomIndex === null && (
          <div className="tabs">
            <button className="tab active">All Problems</button>
            <button className="tab">Revision</button>
          </div>
        )}

        <div className="actions">
          {randomIndex === null && <input placeholder="Search" />}
          {randomIndex !== null && (
            <button className="all-btn" onClick={() => setRandomIndex(null)}>
              All Problems
            </button>
          )}
          <button
            className="random-btn"
            onClick={() => {
              if (problems.length === 0) return;
              const next = Math.floor(Math.random() * problems.length);
              setRandomIndex(
                problems.length > 1 && next === randomIndex
                  ? (next + 1) % problems.length
                  : next,
              );
            }}
          >
            {randomIndex === null ? "Random Problem" : "Another Random"}
          </button>
        </div>
      </div>

      {/* Progress */}
      {randomIndex === null && (
        <div className="overall-progress">
          <p className="label">Overall Progress</p>
          <h2>{progressPercent}%</h2>
          <span>
            {completedCount} / {totalCount}
          </span>
        </div>
      )}

      {/* Section */}
      <div className="problem-section">
        <div className="section-header">
          <h3>{sections[0]?.title ?? "Loading..."}</h3>
          <span>
            {completedCount} / {totalCount}
          </span>
        </div>

        {/* Table */}
        <div className="problem-table">
          <div className="table-header">
            <span>Status</span>
            <span>Problem</span>
            <span>Difficulty</span>
            <span>Note</span>
            <span>Revision</span>
          </div>

          {visibleProblemIndexes.map((i) => (
            <div key={problems[i].id} className="table-row">
              <input
                type="checkbox"
                checked={checked[i] ?? false}
                onChange={(e) => {
                  const next = [...checked];
                  next[i] = e.target.checked;
                  setChecked(next);
                }}
              />
              <Link
                to={`/problems/${problems[i].id}`}
                className="problem-title link"
              >
                {problems[i].title}
              </Link>
              <span className="muted">{problems[i].difficulty}</span>
              <button className="icon-btn">+</button>
              <button className="icon-btn">☆</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryProblems;
