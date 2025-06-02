import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const UsefetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");

      try {
        const res = await fetch(url, {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });

        const text = await res.text();

        // Debug: log response text if JSON parsing fails
        let result;
        try {
          result = JSON.parse(text);
        } catch {
          console.error("Failed to parse JSON, response text:", text);
          throw new Error("Server returned invalid JSON response.");
        }

        if (!res.ok) {
          throw new Error(result.message || "Failed to fetch data");
        }

        setData(result.data || []);
      } catch (err) {
        setError(err.message);
        toast.error(err.message || "Failed to fetch data", { theme: "light" });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default UsefetchData;
