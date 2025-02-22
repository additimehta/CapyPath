import { useState, useEffect } from "react";
import { supabase } from "./superbase";
import "./form.css";

export default function Form() {
  // Hardcoded list of Ontario universities
  const universities = [
    "University of Toronto",
    "McMaster University",
    "University of Waterloo",
    "Western University",
    "Queen's University",
    "York University",
    "Carleton University",
    "University of Ottawa",
    "Toronto Metropolitan University",
    "University of Guelph",
    "Trent University",
    "Laurentian University",
    "Wilfrid Laurier University",
    "Brock University",
    "Ontario Tech University",
    "Nipissing University",
    "Lakehead University",
    "University of Windsor",
    "Algoma University",
    "University of Sudbury",
  ];

  const [selectedUniversity, setSelectedUniversity] = useState(""); // Selected uni
  const [degrees, setDegrees] = useState([]); // List of degrees for selected uni
  const [selectedDegree, setSelectedDegree] = useState(""); // Selected degree
  const [data, setData] = useState(null);
  const [formStep, setFormStep] = useState("university"); // Track form progress

  // Fetch degrees from Supabase based on selected university
  useEffect(() => {
    async function fetchDegrees() {
      if (!selectedUniversity) {
        setDegrees([]);
        return;
      }

      let { data, error } = await supabase
        .from("Cards")
        .select("degree")
        .eq("uni", selectedUniversity);

      if (data) {
        setDegrees(data.map((entry) => entry.degree));
      }
    }
    fetchDegrees();
  }, [selectedUniversity]);

  // Fetch job opportunities & facts when degree is selected
  useEffect(() => {
    async function fetchData() {
      if (!selectedDegree) {
        setData(null);
        return;
      }

      let { data, error } = await supabase
        .from("Cards")
        .select("uni, degree, job_opportunities, interesting_facts")
        .eq("uni", selectedUniversity)
        .eq("degree", selectedDegree)
        .single();

      if (data) {
        setData(data);
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
      // You can add additional logic here, such as sending data to an API
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
            <label style={{ color: "white" }} >Choose a Degree:</label>
            <select
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
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