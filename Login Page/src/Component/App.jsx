import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with username:', username, 'and password:', password);
  };

  const handleSignUp = () => {
    // Implement your sign up logic here
    console.log('Signing up with username:', username, 'email:', email, 'and password:', password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#D0C088', padding: '40px', borderRadius: '10px', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.5)', fontFamily: 'Arial, sans-serif', textAlign: 'center', color: '#000' }}>
        <h1 style={{ marginBottom: '20px', color: '#000' }}>{isLogin ? 'Login Page' : 'Sign Up Page'}</h1>
        {isLogin ? (
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px', color: '#000' }}>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px', color: '#000' }}>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" style={{ backgroundColor: '#D0C088', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
          </form>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px', color: '#000' }}>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px', color: '#000' }}>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px', color: '#000' }}>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" style={{ backgroundColor: '#D0C088', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
          </form>
        )}
        <button onClick={() => setIsLogin(!isLogin)} style={{ backgroundColor: '#ccc', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}>
          {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
};

export default Login;

