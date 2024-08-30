import React, { useState } from 'react';
import CircularProgressBar from './CircularProgressBar';
import Sidebar from './SideBar';
import RightSidebar from './RightSideBar';
import AddTask from './AddTask';
import AcademicPage from './AcademicPage';
import ReportsPage from './ReportsPage';
import WorkPage from './WorkPage';
import PersonalPage from './PersonalPage';
import Header from './Header'; // Import the Header component
import './Dashboard.css';

const Dashboard = () => {
    const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
    const [selectedBoard, setSelectedBoard] = useState('allBoards');
    const [isReportsPageVisible, setIsReportsPageVisible] = useState(false);
    const [tasks, setTasks] = useState({ academic: [], personal: [], work: [] });

    const toggleAddTask = () => {
        setIsAddTaskVisible(!isAddTaskVisible);
        if (isAddTaskVisible) {
            setIsAddTaskVisible(!isAddTaskVisible);
            setIsReportsPageVisible(false);
        }
    };

    const handleBoardSelection = (board) => {
        setSelectedBoard(board);
        setIsAddTaskVisible(false);
        setIsReportsPageVisible(false);
    };

    const handleReportsPage = () => {
        setIsReportsPageVisible(true);
        setSelectedBoard('allBoards');
    };

    const addTaskToBoard = (taskData) => {
        const boardKey = taskData.board.toLowerCase().replace(/\/| /g, '');
        setTasks(prevTasks => ({
            ...prevTasks,
            [boardKey]: [...prevTasks[boardKey], taskData]
        }));
    };

    const renderContent = () => {
        if (isReportsPageVisible) {
            return <ReportsPage />;
        }
        
        if (selectedBoard === 'academic') {
            return <AcademicPage tasks={tasks.academic} />;
        }
        if (selectedBoard === 'personal') {
            return <PersonalPage tasks={tasks.personal} />;
        }
        if (selectedBoard === 'work') {
            return <WorkPage tasks={tasks.work} />;
        }

        // Default view
        return (
            <div>
                <div className="overview-section">
                    <div className="circular-progress-wrapper">
                        <div className="circular-progress-bar">
                            <CircularProgressBar
                                percentage={75}
                                color="#4caf50"
                                text="Total Tasks"
                                label="15"
                            />
                        </div>
                        <div className="circular-progress-bar">
                            <CircularProgressBar
                                percentage={50}
                                color="#f44336"
                                text="Completed"
                                label="7"
                            />
                        </div>
                    </div>
                </div>
                <div className="lower-section">
                    <div className="in-progress-container">
                        <h3>In Progress</h3>
                        <ul className="in-progress-tasks">
                            <li>Task 1</li>
                            <li>Task 2</li>
                            <li>Task 3</li>
                        </ul>
                    </div>
                    <div className="current-boards">
                        <h3>Current Boards</h3>
                        <ul>
                            <li onClick={() => handleBoardSelection('academic')}>Academic/Education</li>
                            <li onClick={() => handleBoardSelection('personal')}>Personal</li>
                            <li onClick={() => handleBoardSelection('work')}>Professional Boards</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="dashboard">
            <Header /> {/* Add Header component here */}

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

                <RightSidebar selectedBoard={selectedBoard} tasks={tasks[selectedBoard.toLowerCase().replace(/\/| /g, '')]} />
            </div>
        </div>
    );
};

export default Dashboard;
