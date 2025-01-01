import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Page, Card, Button, DataTable } from '@shopify/polaris';

const SubmissionList = () => {
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch submission data from the API
    fetch('/api/submissions')
      .then((response) => response.json())
      .then((data) => setSubmissions(data));
  }, []);

  const rows = submissions.map((submission) => [
    submission.name,
    submission.email,
    submission.dropdown_value,
  ]);

  return (
    <Page
      title="Submissions"
      primaryAction={{
        content: 'Add Submission',
        onAction: () => navigate('/form'), // Navigate to the form page
      }}
    >
      <Card>
        <DataTable
          columnContentTypes={['text', 'text', 'text']}
          headings={['Name', 'Email', 'Dropdown Value']}
          rows={rows}
        />
      </Card>
    </Page>
  );
};

export default SubmissionList;
