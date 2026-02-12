import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../lib/api";

function ProblemDetail() {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet(`/problems/${id}`)
      .then((data) => setProblem(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p style={{ color: "white", padding: "2rem" }}>Loading...</p>;
  }

  if (!problem) {
    return <p style={{ color: "white", padding: "2rem" }}>Problem not found.</p>;
  }

  return (
    <div className="problem-detail-page">

      <div className="problem-header">
        <h1>{problem.title}</h1>
        <span className={`difficulty ${problem.difficulty?.toLowerCase()}`}>
          {problem.difficulty}
        </span>
      </div>

      {problem.content && (
        <div className="problem-content">
          <h2>Explanation</h2>
          <p>{problem.content}</p>
        </div>
      )}

      {problem.code && (
        <div className="problem-code">
          <h2>Code</h2>
          <pre>
            <code>{problem.code}</code>
          </pre>
        </div>
      )}

      {problem.videoUrl && (
        <div className="problem-video">
          <h2>Video Explanation</h2>
          <iframe
            src={problem.videoUrl}
            title="Video explanation"
            allowFullScreen
          />
        </div>
      )}

    </div>
  );
}

export default ProblemDetail;
