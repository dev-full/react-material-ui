import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReportTable from './views/ReportTable';
import DatePicker from './components/DatePicker';
function App() {
  return (
    <div className="App">
      <DatePicker/>
      <ReportTable/>
    </div>
  );
}

export default App;
