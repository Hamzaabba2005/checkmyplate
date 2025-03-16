import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={styles.container}>
      <h1 style={styles.heading}>🚗 CarStuff101 🚗</h1>
      <p style={styles.text}>Welcome to my brand new React-powered site!</p>
      <p style={styles.subText}>More updates coming soon. Stay tuned! 🔧</p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  subText: {
    fontSize: '1rem',
    opacity: 0.7,
  }
};

export default App;
