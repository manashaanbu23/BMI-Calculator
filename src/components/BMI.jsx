import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BMI() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const navigate = useNavigate();

  const calculateBMI = () => {
    if (!name || !age || !gender || !weight || !height) {
      alert("Please fill all fields");
      return;
    }

    const heightInMeter = height / 100;
    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

    let category = "";
    let color = "";

    if (bmi < 18.5) {
      category = "Underweight";
      color = "#3498db";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal Weight";
      color = "#2ecc71";
    } else {
      category = "Overweight";
      color = "#e74c3c";
    }

    navigate("/result", {
      state: {
        name,
        age,
        gender,
        bmi,
        category,
        color,
      },
    });
  };

  return (
    <div className="card">
      <h2>BMI Calculator</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <div className="gender-box">
        <label>
          <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
      </div>

      <input
        type="number"
        placeholder="Enter Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={calculateBMI}>Calculate BMI</button>
    </div>
  );
}

export default BMI;