import axios from 'axios';
import React, { useState } from 'react'

const ChangePasswordPage: React.FC = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const rsp = await axios.put(`/api/v1/${process.env.NEXT_PUBLIC_UPDATE_REQ_PASSWORD}`, formData);
      console.log('Password change submitted:', rsp.data);
    } catch (error) {
      console.error('Error changing password:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Change Password</h2>
        
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium mb-1'>Current Password</label>
            <input
              type='password'
              name='currentPassword'
              value={formData.currentPassword}
              onChange={handleChange}
              className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>New Password</label>
            <input
              type='password'
              name='newPassword'
              value={formData.newPassword}
              onChange={handleChange}
              className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>Confirm New Password</label>
            <input
              type='password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200'
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChangePasswordPage