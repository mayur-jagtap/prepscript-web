import { useMemo, useState } from "react";

const problems = [
  "What is Network",
  "Types of Network (LAN, WAN, MAN)",
  "Hub, Switch, and Router",
  "Network Topology and its Types",
  "Nodes and Links",
];

function CategoryProblems() {
  const [randomIndex, setRandomIndex] = useState(null);
  const [checked, setChecked] = useState(() =>
    Array.from({ length: problems.length }, () => false)
  );

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
  }, [randomIndex]);

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
              // Avoid repeating the same pick when possible.
              const nextIndex =
                problems.length > 1 && next === randomIndex
                  ? (next + 1) % problems.length
                  : next;
              setRandomIndex(nextIndex);
            }}
          >
            {randomIndex === null ? "Random Problem" : "Another Random"}
          </button>
        </div>
      </div>

      {randomIndex === null && (
        <div className="overall-progress">
          <p className="label">Overall Progress</p>
          <h2>{progressPercent}%</h2>
          <span className="progress-count">
            {completedCount} / {totalCount}
          </span>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="Overall progress"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Section */}
      <div className="problem-section">
        <div className="section-header">
          <h3>Introduction to CN</h3>
          <span>
            {completedCount} / {totalCount}
          </span>
        </div>

        {/* Table */}
        <div className="problem-table">
          <div className="table-header">
            <span>Status</span>
            <span>Problem</span>
            <span>Resource</span>
            <span>Note</span>
            <span>Revision</span>
          </div>

          {visibleProblemIndexes.map((i) => (
            <div key={i} className="table-row">
              <input
                type="checkbox"
                checked={checked[i] ?? false}
                onChange={(e) => {
                  const next = [...checked];
                  next[i] = e.target.checked;
                  setChecked(next);
                }}
              />
              <span className="problem-title">{problems[i]}</span>
              <span className="muted">---</span>
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
