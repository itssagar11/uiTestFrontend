import React, { useState } from 'react';
import axios from 'axios';

export const Deposit = () => {
    const [formData, setFormData] = useState({
        accountNo: '',
        ifsc: '',
        amount: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8085/deposit', formData)
            .then(response => {
                if (response.status === 200) {
                    setSuccess('Deposit successful');
                    setError('');
                } else {
                    setError(response.data);
                    setSuccess('');
                }
            })
            .catch(error => {
                setError('Backend Error');
                setSuccess('');
            });
    };

    return (
        <div>
            <h3>Deposit</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <input type='number' name='accountNo' min='6'  placeholder='Enter Account No' value={formData.accountNo} onChange={handleChange} required />
                    <input type='text' name='ifsc' placeholder='Enter IFSC' value={formData.ifsc} onChange={handleChange} required />
                    <input type='number' name='amount' placeholder='Enter Amount' value={formData.amount} onChange={handleChange} required />
                    <button type='submit'>Deposit</button>
                </div>
                {error && <div className='error'>{error}</div>}
            {success && <div className='success'>{success}</div>}
         
            </form>
          
        </div>
    );
};
