import React, { useEffect, useState } from 'react';
import styles from './ProgressTracker.module.css';

const ProgressTracker = () => {
  const [progressData, setProgressData] = useState({});

  useEffect(() => {
    const data = {
      "Task Completion": 75,
      "Study Hours": 60,
      "Project Milestones": 90,
      "Habit Streak": 85,
    };
    setProgressData(data);
  }, []);

  const descriptions = {
    "Task Completion": "Overall progress on your daily tasks.",
    "Study Hours": "Hours dedicated to learning and studying this month.",
    "Project Milestones": "Progress on your current key projects.",
    "Habit Streak": "Days you've maintained a positive habit.",
  };

  return (
    <div className={styles.trackerContainer}>
      <div className={styles.progressBar}>
        {Object.entries(progressData).map(([title, percent]) => (
          <div className="tracker-card" key={title}>
            <h3>{title}</h3>
            <p>{descriptions[title]}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${percent}%` }}>
                {percent}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
