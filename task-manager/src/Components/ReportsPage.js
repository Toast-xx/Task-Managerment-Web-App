import React, { useState, useEffect } from 'react';
import './ReportsPage.css'; // Add your styles here

const ReportsPage = () => {
  const [tasksOverview, setTasksOverview] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    inProgressTasks: 0,
  });

  const [chartData, setChartData] = useState({
    labels: ['Completed', 'Pending', 'In Progress'],
    data: [0, 0, 0],
  });

  useEffect(() => {
    // Simulate fetching data
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
      <h1>Reports and Analytics</h1>
      <div className="reports-overview">
        <h2>Task Overview</h2>
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
        <PieChart data={chartData} />
      </div>
    </div>
  );
};

const PieChart = ({ data }) => {
  return (
    <div className="pie-chart">
      <h3>Pie Chart (Example)</h3>
      <div>
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
