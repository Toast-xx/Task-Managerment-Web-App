import React, { useState } from 'react';
import CircularProgressBar from './CircularProgressBar';
import Sidebar from './SideBar'; 
import RightSidebar from './RightSideBar'; 
import AddTask from './AddTask'; 
import AcademicPage from './AcademicPage'; 
import ReportsPage from './ReportsPage'; 
import './Dashboard.css'; 

const Dashboard = () => {
    const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
    const [selectedBoard, setSelectedBoard] = useState('allBoards');
    const [isReportsPageVisible, setIsReportsPageVisible] = useState(false);

    const toggleAddTask = () => {
        setIsAddTaskVisible(!isAddTaskVisible);
        if (isAddTaskVisible) {
            setIsReportsPageVisible(false); // Hide reports page if Add Task is toggled
        }
    };

    const handleBoardSelection = (board) => {
        setSelectedBoard(board);
        setIsAddTaskVisible(false);
        setIsReportsPageVisible(false); // Hide reports page when selecting a board
    };

    const handleReportsPage = () => {
        setIsReportsPageVisible(true);
        setSelectedBoard(''); // Clear board selection
    };

    return (
        <div className="dashboard">
            <Sidebar 
                onAddTaskClick={toggleAddTask} 
                onBoardSelect={handleBoardSelection} 
                onReportsClick={handleReportsPage} // Pass reports click handler
            />

            <div className={`main-content ${isAddTaskVisible || isReportsPageVisible ? 'hidden' : ''}`}>
                {/* Render ReportsPage if visible */}
                {isReportsPageVisible && <ReportsPage />}

                {/* Render content based on selected board */}
                {!isReportsPageVisible && selectedBoard === 'allBoards' && (
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
                                    <li onClick={() => handleBoardSelection('work')}>Professional/Work</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {selectedBoard === 'academic' && !isReportsPageVisible && <AcademicPage />}
                {selectedBoard === 'personal' && !isReportsPageVisible && <div>Personal Board Content</div>}
                {selectedBoard === 'work' && !isReportsPageVisible && <div>Professional/Work Board Content</div>}
            </div>

            {isAddTaskVisible && (
                <div className="add-task-overlay">
                    <AddTask onClose={toggleAddTask} />
                </div>
            )}

            <RightSidebar />
        </div>
    );
};

export default Dashboard;
