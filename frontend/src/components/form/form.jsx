import { useState, useEffect } from "react";
import { supabase } from "./superbase";
import './form.css';

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

  return (
    <div>
      <h2>Find Your Career Pathway</h2>
      <form>
        {/* Hardcoded University Dropdown */}
        <label style={{ color: "white" }}>Choose a University:</label>
        <select
          value={selectedUniversity}
          onChange={(e) => {
            setSelectedUniversity(e.target.value);
            setSelectedDegree(""); // Reset degree when university changes
          }}
        >
          <option value="">Select a university</option>
          {universities.map((uni, index) => (
            <option key={index} value={uni}>
              {uni}
            </option>
          ))}
        </select>

        {/* Degree Dropdown (Only appears if a university is selected) */}
        {degrees.length > 0 && (
          <>
            <label>Choose a Degree:</label>
            <select
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
            >
              <option value="">Select a degree</option>
              {degrees.map((deg, index) => (
                <option key={index} value={deg}>
                  {deg}
                </option>
              ))}
            </select>
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
