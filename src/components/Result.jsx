import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) return <h2>No Data Found</h2>;

  return (
    <div className="card">
      <h2>{data.name}'s BMI Result</h2>

      <div className="result-box">
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>BMI:</strong> {data.bmi}</p>

        <h3 style={{ color: data.color }}>
          {data.category}
        </h3>
      </div>

      <button onClick={() => navigate("/")}>
        Calculate Again
      </button>
    </div>
  );
}

export default Result;