import React, { useState, useEffect } from 'react';
import './ReportsPage.css'; // Import styles for the ReportsPage component

const ReportsPage = () => {
  // State to hold the overview of tasks
  const [tasksOverview, setTasksOverview] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    inProgressTasks: 0,
  });

  // State to hold the chart data
  const [chartData, setChartData] = useState({
    labels: ['Completed', 'Pending', 'In Progress'],
    data: [0, 0, 0],
  });

  // useEffect to simulate fetching data when the component mounts
  useEffect(() => {
    // Simulated data fetch
    setTasksOverview({
      totalTasks: 100,
      completedTasks: 50,
      pendingTasks: 30,
      inProgressTasks: 20,
    });

    setChartData({
      labels: ['Completed', 'Pending', 'In Progress'],
      data: [50, 30, 20],
    });
  }, []);

  return (
    <div className="reports-page">
      {/* Main heading for the Reports and Analytics page */}
      <h1>Reports and Analytics</h1>
      <div className="reports-overview">
        <h2>Task Overview</h2>
        {/* Display task overview statistics */}
        <div className="overview-item">
          <span>Total Tasks:</span> <strong>{tasksOverview.totalTasks}</strong>
        </div>
        <div className="overview-item">
          <span>Completed Tasks:</span> <strong>{tasksOverview.completedTasks}</strong>
        </div>
        <div className="overview-item">
          <span>Pending Tasks:</span> <strong>{tasksOverview.pendingTasks}</strong>
        </div>
        <div className="overview-item">
          <span>In Progress Tasks:</span> <strong>{tasksOverview.inProgressTasks}</strong>
        </div>
      </div>
      <div className="reports-charts">
        <h2>Task Distribution</h2>
        {/* Render PieChart component with chartData */}
        <PieChart data={chartData} />
      </div>
    </div>
  );
};

// Component to render a pie chart (example implementation)
const PieChart = ({ data }) => {
  return (
    <div className="pie-chart">
      <h3>Pie Chart (Example)</h3>
      <div>
        {/* Render each label and its corresponding data */}
        {data.labels.map((label, index) => (
          <div key={index}>
            <span>{label}:</span> <strong>{data.data[index]}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
