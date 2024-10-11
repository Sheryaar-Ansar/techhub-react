import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
  const mode = useSelector((state) => state.mode.mode)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    feedback: '',
  })
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const [errors, setErrors] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {}
    if (!formData.firstName.trim()) {
      validationErrors.firstName = 'First Name is Required!'
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = 'First Name is Required!'
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is Required!'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is Not Valid!'
    }

    if (!formData.feedback.trim()) {
      validationErrors.feedback = 'You must have to comment!'
    }
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      alert(`Thanks for your feedback, ${formData.firstName} ${formData.lastName}! We’ll review your comments and send a response to ${formData.email} shortly.`)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        feedback: '',
      })
      console.log('form Details: ', formData);

    }
  }
  // console.log(errors);

  return (
    <div className={`${mode ? 'bg-gray-900' : 'bg-gray-200'}`}>
      <div className='min-h-screen mx-auto mt-[70px] pt-[100px]'>
        <div className='flex justify-center items-center'>
          <div className={`border-opacity-0 md:border-opacity-100 md:border md:border-gray-300 px-0 py-0 md:px-6 md:py-12 lg:px-12 lg:py-24 md:rounded-lg`}>
            <h1 className='text-2xl uppercase'>Contact Us</h1>
            <hr className='my-2 bg-gray-300 h-1' />
            <div className='mt-3'>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row'>
                  <label htmlFor='firstName' className='md:w-[50%]'>First Name<input type="text" id='firstName' name='firstName' placeholder='Enter Your First Name' onChange={onChange} value={formData.firstName} className={`block border p-2 ${mode && 'bg-gray-700'}`} />{errors.firstName && <span className='text-red-500'>{errors.firstName}</span>} </label>
                  <label htmlFor='lastName' className='mt-3 w-full md:w-[50%] md:mt-0 md:ml-2'>Last Name<input type="text" id='lastName' name='lastName' placeholder='Enter Your Last Name' onChange={onChange} value={formData.lastName} className={`block border p-2 ${mode && 'bg-gray-700'}`} />{errors.lastName && <span className='text-red-500'>{errors.lastName}</span>}</label>
                </div>
                <div className='mt-3'>
                  <label htmlFor='email'>Email<input type="text" id='email' name='email' placeholder='Enter Your Email Address' onChange={onChange} value={formData.email} className={`block border p-2 w-full ${mode && 'bg-gray-700'}`} />{errors.email && <span className='text-red-500'>{errors.email}</span>}</label>
                </div>
                <div className='mt-3'>
                  <label htmlFor='feedback'>Feedback  <textarea name="feedback" id="feedback" onChange={onChange} value={formData.feedback} className={`block p-2 border w-full h-40 ${mode && 'bg-gray-700'}`} placeholder='Please write your feedback here' ></textarea>{errors.feedback && <span className='text-red-500'>{errors.feedback}</span>}</label>
                </div>
                <button type='submit' className={`w-full h-10 border rounded-sm border-green-300 mt-3 ${mode ? 'text-white' : 'text-black'} hover:bg-green-400 hover:shadow-md hover:shadow-green-400 hover:text-white hover:border hover:border-green-400 transition-all duration-300 ease-in`}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
