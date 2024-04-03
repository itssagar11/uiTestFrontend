import React, { useState } from 'react'
import axios from 'axios';
export const NewCustomer = () => {

    const [formData, setFormData] = useState({
        accountNo: '',
        name: '',
        ifsc: '',
        openingBalance: ''
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


      const handleSubmit =  (e) => {
        e.preventDefault();
    
      
        axios.post('http://localhost:8085/opening-account', formData)
        .then(response => {
            console.log(response);
            if (response.status === 201) {

                setSuccess('Customer created successfully');
                setError('');
            } else {
                setError(response.data);
                setSuccess('');
            }
        })
        

         
      };
  return (
    <div>
      <h3>New Customer</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
          <input type='number' name='accountNo' placeholder='Enter Account No' min='6' value={formData.accountNo} onChange={handleChange} required />
          <input type='text' name='name' placeholder='Enter Name' value={formData.name} onChange={handleChange} required />
          <input type='text' name='ifsc' placeholder='Enter IFSC' value={formData.ifsc} onChange={handleChange} required />
          <input type='number' name='openingBalance' placeholder='Enter Opening Balance' value={formData.openingBalance} onChange={handleChange} required />
          <button type='submit'>Open Account</button>
        </div>
        {error && <div className='error'>{error}</div>}
      {success && <div className='success'>{success}</div>}
      
      </form>
      
    </div>
  )
}
