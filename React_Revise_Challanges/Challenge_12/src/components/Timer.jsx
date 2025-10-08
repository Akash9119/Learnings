import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }
        
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isRunning]);

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    return (
        <div>
            <h1>Timer: {count} seconds</h1>
            <button onClick={stopTimer} disabled={!isRunning}>
                Stop Timer
            </button>
        </div>
    );
};

export default Timer;
