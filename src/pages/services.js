'use client';
import { useEffect, useState } from 'react';

const defaultTasks = {
  professional: [
    'Finish project report', 'Attend team meeting', 'Send client follow-up email', 'Review quarterly goals'
  ],
  health: [
    'Go for a 30-minute run', 'Drink 8 glasses of water', 'Stretch for 10 minutes', 'Book dentist appointment', 'Prepare healthy meals for the week'
  ],
  lifegoals: [
    'Plan next week’s schedule', 'Read a chapter of a personal development book', 'Meditate for 15 minutes', 'Practice a new skill or hobby', 'Set monthly savings goal'
  ],
  finance: [
    'Review monthly budget', 'Pay credit card bill', 'Track daily expenses', 'Research investment options', 'Organize tax documents'
  ],
  selfcare: [
    'Meditate for 10 minutes', 'Take a relaxing bath', 'Read a favorite book', 'Journal thoughts and feelings', 'Listen to calming music'
  ],
  entertainment: [
    'Watch a movie', 'Call a friend for a chat', 'Play a board game', 'Listen to a podcast', 'Try a new recipe'
  ]
};

const STORAGE_KEY_BASE = 'AceItMonthlyTasks_';

function getDaysInMonth(monthStr) {
  const [year, month] = monthStr.split('-').map(Number);
  return new Date(year, month, 0).getDate();
}

function getStorageKey(month) {
  return STORAGE_KEY_BASE + month;
}

function initializeMonthlyTasks(tasksByCategory, daysInMonth) {
  const result = {};
  for (const category in tasksByCategory) {
    result[category] = {};
    tasksByCategory[category].forEach(task => {
      result[category][task] = new Array(daysInMonth).fill(false);
    });
  }
  return result;
}

export default function TaskTracker() {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });

  const [tasks, setTasks] = useState({});
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(currentMonth));
  const [newTask, setNewTask] = useState('');
  const [category, setCategory] = useState('professional');

  useEffect(() => {
    const days = getDaysInMonth(currentMonth);
    setDaysInMonth(days);

    const saved = localStorage.getItem(getStorageKey(currentMonth));
    let loaded;
    if (saved) {
      try {
        loaded = JSON.parse(saved);
      } catch {
        loaded = initializeMonthlyTasks(defaultTasks, days);
      }
    } else {
      loaded = initializeMonthlyTasks(defaultTasks, days);
    }

    for (const cat in loaded) {
      for (const task in loaded[cat]) {
        if (loaded[cat][task].length !== days) {
          loaded[cat][task] = new Array(days).fill(false);
        }
      }
    }

    setTasks(loaded);
  }, [currentMonth]);

  const saveTasks = (updated) => {
    localStorage.setItem(getStorageKey(currentMonth), JSON.stringify(updated));
    setTasks(updated);
  };

  const handleCheck = (cat, task, day) => {
    const updated = { ...tasks };
    updated[cat][task][day] = !updated[cat][task][day];
    saveTasks(updated);
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const updated = { ...tasks };
    if (!updated[category]) updated[category] = {};
    if (updated[category][newTask]) return alert('Task already exists.');
    updated[category][newTask] = new Array(daysInMonth).fill(false);
    setNewTask('');
    saveTasks(updated);
  };

  const handleDeleteTask = (cat, task) => {
    const updated = { ...tasks };
    delete updated[cat][task];
    saveTasks(updated);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Monthly Task Tracker</h2>

      <label>
        Month:
        <input
          type="month"
          value={currentMonth}
          onChange={(e) => setCurrentMonth(e.target.value)}
        />
      </label>

      <div style={{ marginTop: '1rem' }}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {Object.keys(defaultTasks).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {Object.entries(tasks).map(([cat, taskMap]) => (
        <div key={cat} style={{ marginTop: '2rem' }}>
          <h3>{cat}</h3>
          <ul>
            {Object.entries(taskMap).map(([task, completion]) => (
              <li key={task}>
                <strong>{task}</strong>
                <button onClick={() => handleDeleteTask(cat, task)} style={{ marginLeft: '1rem' }}>Delete</button>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 30px)', gap: '4px', marginTop: '0.5rem' }}>
                  {completion.map((done, i) => (
                    <label key={i} title={`Day ${i + 1}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem' }}>{i + 1}</span>
                      <input
                        type="checkbox"
                        checked={done}
                        onChange={() => handleCheck(cat, task, i)}
                      />
                    </label>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}



