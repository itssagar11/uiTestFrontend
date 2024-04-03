import React, { useState } from 'react';
import axios from 'axios';

export const BalanceEnquiry = () => {
    const [formData, setFormData] = useState({
        accountNo: '',
        ifsc: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [balance, setBalance] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:8085/balance-enquiry?accountNo=${formData.accountNo}&IFSC=${formData.ifsc}`)
            .then(response => {
                if (response.status === 200) {
                    setBalance(response.data);
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
            <h3>Balance Enquiry</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <input type='number' name='accountNo' placeholder='Enter Account No' min='6' value={formData.accountNo} onChange={handleChange} required />
                    <input type='text' name='ifsc' placeholder='Enter IFSC' value={formData.ifsc} onChange={handleChange} required />
                    <button type='submit'>Get Balance</button>
                </div>
                {error && <div className='error'>{error}</div>}
            {balance && <div className='success'>{balance}</div>}
           
            </form>
           
        </div>
    );
};
