import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { supabase } from "./superbase";
import "./form.css";
import { universityDegrees } from "./data/universityData"; // Import the data

export default function Form() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Hardcoded list of Ontario universities
  const universities = Object.keys(universityDegrees); // Get university names from the object

  const [selectedUniversity, setSelectedUniversity] = useState(""); // Selected uni
  const [degrees, setDegrees] = useState([]); // List of degrees for selected uni
  const [selectedDegree, setSelectedDegree] = useState(""); // Selected degree
  const [data, setData] = useState(null); // Data for the selected degree
  const [formStep, setFormStep] = useState("university"); // Track form progress

  // Update degrees when university changes
  useEffect(() => {
    if (selectedUniversity) {
      setDegrees(universityDegrees[selectedUniversity] || []);
    } else {
      setDegrees([]);
    }
  }, [selectedUniversity]);

  // Fetch job opportunities & facts when degree is selected
  useEffect(() => {
    async function fetchData() {
      if (!selectedDegree) {
        setData(null); // Reset data if no degree is selected
        return;
      }

      console.log("Fetching data for degree:", selectedDegree);

      let { data, error } = await supabase
        .from("Cards")
        .select("uni, degree, job_opportunities, interesting_facts")
        .eq("uni", selectedUniversity)
        .eq("degree", selectedDegree)
        .single();

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      console.log("Fetched data:", data);

      if (data) {
        setData(data); // Update data state with fetched results
      } else {
        console.log("No data found for this degree.");
      }
    }
    fetchData();
  }, [selectedDegree]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    if (formStep === "university") {
      // Move to the next step (degree selection)
      setFormStep("degree");
    } else if (formStep === "degree") {
      // Process the final submission (e.g., display results)
      console.log("Selected University:", selectedUniversity);
      console.log("Selected Degree:", selectedDegree);

      // Navigate to the dashboard
      navigate("/dashboards");
    }
  };

  return (
    <div>
      <h2>Find Your Career Pathway</h2>
      <form onSubmit={handleSubmit}>
        {/* University Dropdown (Only shown in the first step) */}
        {formStep === "university" && (
          <>
            <label style={{ color: "white" }}>Choose a University:</label>
            <select
              value={selectedUniversity}
              onChange={(e) => setSelectedUniversity(e.target.value)}
              required
            >
              <option value="">Select a university</option>
              {universities.map((uni, index) => (
                <option key={index} value={uni}>
                  {uni}
                </option>
              ))}
            </select>
            <button type="submit">Next</button>
          </>
        )}

        {/* Degree Dropdown (Only shown in the second step) */}
        {formStep === "degree" && (
          <>
            <label style={{ color: "white" }}>Choose a Degree:</label>
            <select
              value={selectedDegree}
              onChange={(e) => {
                console.log("Selected Degree:", e.target.value); // Debugging log
                setSelectedDegree(e.target.value);
              }}
              required
            >
              <option value="">Select a degree</option>
              {degrees.map((deg, index) => (
                <option key={index} value={deg}>
                  {deg}
                </option>
              ))}
            </select>
            <button type="submit">Submit</button>
          </>
        )}
      </form>

      {/* Show results in a card */}
      {data && (
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>
            {data.degree} at {data.uni}
          </h3>
          <p>
            <strong>Job Opportunities:</strong>{" "}
            {data.job_opportunities || "No data available."}
          </p>
          <p>
            <strong>Interesting Facts:</strong>{" "}
            {data.interesting_facts || "No data available."}
          </p>
        </div>
      )}
    </div>
  );
}