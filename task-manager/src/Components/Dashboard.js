import React, { useState } from 'react';
import CircularProgressBar from './CircularProgressBar';
import Sidebar from './SideBar';
import RightSidebar from './RightSideBar';
import AddTask from './AddTask';
import AcademicPage from './AcademicPage';
import ReportsPage from './ReportsPage';
import WorkPage from './WorkPage';
import PersonalPage from './PersonalPage';
import FullCalendarPage from './FullCalendarPage';
import Header from './Header';
import './Dashboard.css';

const Dashboard = () => {
    // State hooks for managing visibility of components and data
    const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
    const [selectedBoard, setSelectedBoard] = useState('allBoards');
    const [isReportsPageVisible, setIsReportsPageVisible] = useState(false);
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const [tasks, setTasks] = useState({
        academic: [],
        personal: [],
        work: [],
    });

    // Toggles visibility of the AddTask component
    const toggleAddTask = () => {
        setIsAddTaskVisible(!isAddTaskVisible);
        setIsReportsPageVisible(false);
        setIsCalendarVisible(false);
    };

    // Handles the board selection and hides other components
    const handleBoardSelection = (board) => {
        setSelectedBoard(board);
        setIsAddTaskVisible(false);
        setIsReportsPageVisible(false);
        setIsCalendarVisible(false);
    };

    // Shows the ReportsPage and resets other states
    const handleReportsPage = () => {
        setIsReportsPageVisible(true);
        setSelectedBoard('allBoards');
        setIsCalendarVisible(false);
    };

    // Shows the FullCalendarPage and hides other components
    const handleCalendarClick = () => {
        setIsCalendarVisible(true);
        setIsAddTaskVisible(false);
        setIsReportsPageVisible(false);
    };

    // Adds a task to the selected board
    const addTaskToBoard = (taskData) => {
        const boardKey = taskData.board.toLowerCase().replace(/\/| /g, '');
        setTasks(prevTasks => ({
            ...prevTasks,
            [boardKey]: [...prevTasks[boardKey], taskData],
        }));
    };

    // Moves a task to a new status (e.g., from 'in progress' to 'completed')
    const moveTask = (boardKey, taskId, newStatus) => {
        setTasks(prevTasks => ({
            ...prevTasks,
            [boardKey]: prevTasks[boardKey].map(task =>
                task.id === taskId ? { ...task, status: newStatus } : task
            ),
        }));
    };

    // Calculates the total and completed tasks across all boards
    const getTotalAndCompletedTasks = () => {
        let total = 0;
        let completed = 0;
        for (const board in tasks) {
            total += tasks[board].length;
            completed += tasks[board].filter(task => task.status === 'completed').length;
        }
        return { total, completed };
    };

    // Gets all tasks that are currently "in progress"
    const getInProgressTasks = () => {
        let inProgressTasks = [];
        for (const board in tasks) {
            inProgressTasks = [
                ...inProgressTasks,
                ...tasks[board].filter(task => task.status === 'in progress'),
            ];
        }
        return inProgressTasks;
    };

    // Returns the count of tasks for each board
    const getTaskCounts = () => {
        return {
            academic: tasks.academic.length,
            personal: tasks.personal.length,
            work: tasks.work.length,
        };
    };

    // Destructure the total and completed tasks for progress calculations
    const { total, completed } = getTotalAndCompletedTasks();
    const taskCounts = getTaskCounts();
    const percentage = total ? (completed / total) * 100 : 0;

    // Determines which component to render based on current state
    const renderContent = () => {
        if (isReportsPageVisible) {
            return <ReportsPage />;
        }
        if (isCalendarVisible) {
            return <FullCalendarPage />;
        }
        if (selectedBoard === 'academic') {
            return <AcademicPage tasks={tasks.academic} moveTask={moveTask} />;
        }
        if (selectedBoard === 'personal') {
            return <PersonalPage tasks={tasks.personal} moveTask={moveTask} />;
        }
        if (selectedBoard === 'work') {
            return <WorkPage tasks={tasks.work} moveTask={moveTask} />;
        }
        return (
            <div>
                <div className="tasks-wrapper">
                    <div className="in-progress-container">
                        <h3>In Progress</h3>
                        <ul className="in-progress-tasks">
                            {getInProgressTasks().map((task, index) => (
                                <li key={index}>{task.name}</li>
                            ))}
                        </ul>
                        <div className="circular-progress-container">
                            <CircularProgressBar
                                percentage={percentage}
                                color="#4caf50"
                                text={`${completed}/${total}`}
                                label="Tasks Completed"
                            />
                        </div>
                    </div>
                </div>
                <div className="current-boards">
                    <h3>Current Boards</h3>
                    <ul>
                        <li onClick={() => handleBoardSelection('academic')}>
                            Academic/Education ({taskCounts.academic} tasks)
                        </li>
                        <li onClick={() => handleBoardSelection('personal')}>
                            Personal ({taskCounts.personal} tasks)
                        </li>
                        <li onClick={() => handleBoardSelection('work')}>
                            Professional Boards ({taskCounts.work} tasks)
                        </li>
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <div className="dashboard">
            <Header />
            <div className="dashboard-body">
                <Sidebar
                    onAddTaskClick={toggleAddTask}
                    onBoardSelect={handleBoardSelection}
                    onReportsClick={handleReportsPage}
                />
                <div className="main-content">
                    {isAddTaskVisible && (
                        <div className="add-task-container">
                            <AddTask onClose={toggleAddTask} onAddTask={addTaskToBoard} />
                        </div>
                    )}
                    {!isAddTaskVisible && renderContent()}
                </div>
                <RightSidebar
                    selectedBoard={selectedBoard}
                    tasks={tasks[selectedBoard.toLowerCase().replace(/\/| /g, '')]}
                    onCalendarClick={handleCalendarClick}
                />
            </div>
        </div>
    );
};

export default Dashboard;
