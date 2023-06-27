import React, { useState } from 'react';
import Login from './Login';
import WeatherApp from './WeatherApp';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <WeatherApp />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
