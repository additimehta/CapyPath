import { useState, useEffect } from "react";
import { supabase } from "./superbase";

export default function Form() {
  const [university, setUniversity] = useState("");
  const [degrees, setDegrees] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  // Fetch degrees when university name changes
  useEffect(() => {
    async function fetchDegrees() {
      if (!university) {
        setDegrees([]);
        setError("");
        return;
      }

      let { data: uniData, error: uniError } = await supabase
        .from("Cards") // Change this to your actual table name
        .select("degree")
        .eq("uni", university);

      if (!uniData || uniData.length === 0) {
        setDegrees([]);
        setError("Please type an existing university.");
        return;
      }

      setError("");
      setDegrees(uniData.map((entry) => entry.degree));
    }

    fetchDegrees();
  }, [university]);

  // Fetch job opportunities & interesting facts when degree changes
  useEffect(() => {
    async function fetchData() {
      if (!selectedDegree) {
        setData(null);
        return;
      }

      let { data: fetchedData, error: fetchError } = await supabase
        .from("cards") // Change this to your actual table name
        .select("uni, degree, job_opportunities, interesting_facts")
        .eq("uni", university)
        .eq("degree", selectedDegree)
        .single();

      if (fetchedData) {
        setData(fetchedData);
      }
    }

    fetchData();
  }, [selectedDegree]);

  return (
    <div>
      <h2>Find Your Career Pathway</h2>
      <form>
        <label>University Name:</label>
        <input
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}

        {degrees.length > 0 && (
          <>
            <label>Choose a Degree:</label>
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
          </>
        )}
      </form>

      {/* Show results in a card */}
      {data && (
        <div style={{ border: "1px solid #ddd", padding: "20px", marginTop: "20px", borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
          <h3>{data.degree} at {data.uni}</h3>
          <p><strong>Job Opportunities:</strong> {data.job_opportunities || "No data available."}</p>
          <p><strong>Interesting Facts:</strong> {data.interesting_facts || "No data available."}</p>
        </div>
      )}
    </div>
  );
}
