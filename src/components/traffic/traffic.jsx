import React, { useState, useEffect } from 'react';

const Traffic = () => {
  const [light, setLight] = useState('red'); // Initial light is 'red'

  useEffect(() => {
    // Define light intervals in milliseconds
    const lightIntervals = {
      red: 5000,    // Red for 5 seconds
      yellow: 1000, // Yellow for 1 second
      green: 4000,  // Green for 4 seconds
    };

    // Create an interval that updates the light every time the duration for the current light ends
    const interval = setInterval(() => {
      if (light === 'red') {
        setLight('green');
      } else if (light === 'green') {
        setLight('yellow');
      } else if (light === 'yellow') {
        setLight('red');
      }
    }, lightIntervals[light]);  // Use the current light's interval duration

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [light]); // Re-run effect when the 'light' state changes

  return (
    <div>
      <h1>Traffic Light</h1>
      <div
        style={{
          width: '100px',
          height: '300px',
          border: '2px solid black',
          borderRadius: '10px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            margin: '5px auto',
            backgroundColor: light === 'red' ? 'red' : 'gray',
          }}
        ></div>
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            margin: '5px auto',
            backgroundColor: light === 'yellow' ? 'yellow' : 'gray',
          }}
        ></div>
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            margin: '5px auto',
            backgroundColor: light === 'green' ? 'green' : 'gray',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Traffic;
