import React, { useState } from 'react';
import axios from 'axios';

export const ChequeDeposit = () => {
    const [formData, setFormData] = useState({
        from_accountNo: '',
        from_IFSC: '',
        to_accountNo: '',
        to_IFSC: '',
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

        axios.post('http://localhost:8085/cheque-deposit', formData)
            .then(response => {
                if (response.status === 200) {
                    setSuccess('Cheque deposit successful');
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
            <h3>Cheque Deposit</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <input type='number' name='from_accountNo' placeholder='Enter Sender Account No' min='6' value={formData.from_accountNo} onChange={handleChange} required />
                    <input type='text' name='from_IFSC' placeholder='Enter Sender IFSC' value={formData.from_IFSC} onChange={handleChange} required />
                    <input type='number' name='to_accountNo' placeholder='Enter Receiver Account No' value={formData.to_accountNo} onChange={handleChange} required />
                    <input type='text' name='to_IFSC' placeholder='Enter Receiver IFSC' value={formData.to_IFSC} onChange={handleChange} required />
                    <input type='number' name='amount' placeholder='Enter Amount' value={formData.amount} onChange={handleChange} required />
                    <button type='submit'>Deposit Cheque</button>
                </div>
                {error && <div className='error'>{error}</div>}
            {success && <div className='success'>{success}</div>}
            
            </form>
           
        </div>
    );
};
