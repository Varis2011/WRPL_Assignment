import React, { useState } from 'react';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#D0C088' }}>
      {/* Sidebar Profile */}
      <div style={{ width: '250px', backgroundColor: '#D0C088', color: '#000', padding: '20px', boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.5)', transition: 'width 0.5s' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="profile-pic.jpg" alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px', cursor: 'pointer' }} />
          <h2 style={{ fontFamily: 'Arial, sans-serif', marginBottom: '10px', color: '#000' }}>John Doe</h2>
          <p style={{ fontFamily: 'Arial, sans-serif', marginBottom: '20px', color: '#000' }}>john@example.com</p>
        </div>
        <hr style={{ width: '80%', margin: '20px auto', border: '1px solid #555' }} />
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ textDecoration: 'none', color: '#000', fontFamily: 'Arial, sans-serif', display: 'block', padding: '10px', borderRadius: '5px', transition: 'background-color 0.3s' }}>Dashboard</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ textDecoration: 'none', color: '#000', fontFamily: 'Arial, sans-serif', display: 'block', padding: '10px', borderRadius: '5px', transition: 'background-color 0.3s' }}>Settings</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ textDecoration: 'none', color: '#000', fontFamily: 'Arial, sans-serif', display: 'block', padding: '10px', borderRadius: '5px', transition: 'background-color 0.3s' }}>Log Out</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: '#F0F0F0', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Arial, sans-serif', marginBottom: '40px', color: '#000' }}>Welcome to the Dashboard!</h1>
        {/* Selected Option Content */}
        <div>
          <button onClick={() => handleOptionClick('calendar')} style={{ padding: '15px 30px', marginRight: '20px', backgroundColor: selectedOption === 'calendar' ? '#D0C088' : '#ccc', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontFamily: 'Arial, sans-serif', fontSize: '18px' }}>Calendar</button>
          <button onClick={() => handleOptionClick('notes')} style={{ padding: '15px 30px', backgroundColor: selectedOption === 'notes' ? '#D0C088' : '#ccc', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontFamily: 'Arial, sans-serif', fontSize: '18px' }}>Notes</button>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px', color: '#000' }}>
          {selectedOption === 'calendar' && (
            <div>
              <h2 style={{ fontFamily: 'Arial, sans-serif', color: '#000' }}>Calendar</h2>
              {/* Add calendar component here */}
            </div>
          )}
          {selectedOption === 'notes' && (
            <div>
              <h2 style={{ fontFamily: 'Arial, sans-serif', color: '#000' }}>Notes</h2>
              {/* Add notes component here */}
            </div>
          )}
          {!selectedOption && (
            <p style={{ fontFamily: 'Arial, sans-serif', color: '#000' }}>Please select an option.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
