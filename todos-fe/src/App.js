// App.js
import React from 'react';
import './App.css'; // Đảm bảo file App.css nằm trong src
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;