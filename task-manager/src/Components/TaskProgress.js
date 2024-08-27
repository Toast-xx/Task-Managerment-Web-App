import React from 'react';

const TaskProgress = ({ tasks }) => {
    return (
        <div>
            <h2>Task Progress</h2>
            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            {task.name}: {task.progress}%
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TaskProgress;
