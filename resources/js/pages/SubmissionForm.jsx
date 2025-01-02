import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page, Card, FormLayout, TextField, Button, Select } from '@shopify/polaris';

const SubmissionForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dropdown_value: 'option1',
    });

    const handleChange = (field) => (value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const response = await fetch('/api/submissions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        console.log('form submit response: ', response);

        if (response.ok) {
            navigate('/'); // Navigate back to the list page
        } else {
            console.error('Failed to submit the form');
        }
    };

    return (
        <Page title="Add Submission">
            
            <Card sectioned>
                <form onSubmit={handleSubmit} data-save-bar>
                    <FormLayout>
                        <TextField
                            label="Name"
                            value={formData.name}
                            onChange={handleChange('name')}
                            autoComplete="off"
                        />
                        <TextField
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange('email')}
                            autoComplete="off"
                        />
                        <Select
                            label="Dropdown"
                            options={[
                                { label: 'Option 1', value: 'option1' },
                                { label: 'Option 2', value: 'option2' },
                                { label: 'Option 3', value: 'option3' },
                            ]}
                            value={formData.dropdown_value}
                            onChange={handleChange('dropdown_value')}
                        />
                        <Button submit primary>
                            Submit
                        </Button>
                    </FormLayout>
                </form>
            </Card>
        </Page>
    );
};

export default SubmissionForm;
