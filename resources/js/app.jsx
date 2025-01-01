import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmissionList from './pages/SubmissionList';
import SubmissionForm from './pages/SubmissionForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SubmissionList />} />
        <Route path="/form" element={<SubmissionForm />} />
      </Routes>
    </Router>
  );
};

export default App;
