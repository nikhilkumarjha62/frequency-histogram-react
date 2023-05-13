import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const App = () => {
  const [histogramData, setHistogramData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://www.terriblytinytales.com/test.txt"
      );
      const text = await response.text();
      const words = text.split(/\s+/);
      const wordCounts = {};
      words.forEach((word) => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
      });
      const sortedWords = Object.keys(wordCounts).sort(
        (a, b) => wordCounts[b] - wordCounts[a]
      );
      const top20Words = sortedWords.slice(0, 20).map((word) => ({
        word,
        count: wordCounts[word]
      }));
      setHistogramData(top20Words);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  const exportCSV = () => {
    const csvContent = `Word,Count\n${histogramData
      .map((data) => `${data.word},${data.count}`)
      .join("\n")}`;
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "histogram.csv");
    link.click();
  };

  return (
    <div>
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? "Loading..." : "Submit"}
      </button>
      {histogramData.length > 0 && (
        <div>
          <h2>Top 20 Words Histogram</h2>
          <BarChart width={800} height={400} data={histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="cyan" />
          </BarChart>
          <button onClick={exportCSV}>Export</button>
        </div>
      )}
    </div>
  );
};

export default App;
