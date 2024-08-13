import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './index.scss';

const GamePage = () => {
  const { gameId } = useParams();

  // State to track the user's attendance selection
  const [attendance, setAttendance] = useState(null);

  const handleAttendance = (status) => {
    setAttendance(status);
  };

  return (
    <div className="game-page">
      <h2>Attendance for Game ID: {gameId}</h2>
      <div className="attendance-options">
        <Button
          variant={attendance === 'yes' ? 'success' : 'outline-success'}
          className="status-button"
          onClick={() => handleAttendance('yes')}
        >
          ✔️ Yes
        </Button>
        <Button
          variant={attendance === 'no' ? 'danger' : 'outline-danger'}
          className="status-button"
          onClick={() => handleAttendance('no')}
        >
          ❌ No
        </Button>
      </div>
      {attendance && (
        <div className="attendance-confirmation">
          <h4>You selected: {attendance === 'yes' ? '✔️ Yes' : '❌ No'}</h4>
        </div>
      )}
    </div>
  );
};

export default GamePage;
