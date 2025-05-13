import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Timer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const frenchLabels = {
    days: 'Jours',
    hours: 'Heures',
    minutes: 'Minutes',
    seconds: 'Secondes'
  };

  return (
    <div className="container text-center p-4 bg-light mt-4" style={{ maxWidth: '400px' }}>
      <div className="d-flex justify-content-around">
        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
          <div key={unit} className="mx-2">
            <h2 style={{ color: '#FF8C00' }}>
              {String(timeLeft[unit]).padStart(2, '0')}
            </h2>
            <small style={{ color: '#FF8C00' }} className="text-uppercase">
              {frenchLabels[unit]}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timer;
