import React, { useState } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName : '',
    lastName : '',
    email : '',
    feedback: '',
  })
  const onChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name] : value})
  }
  
  const [errors, setErrors] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {}
    if(!formData.firstName.trim()){
      validationErrors.firstName = 'First Name is Required!'
    }

    if(!formData.lastName.trim()){
      validationErrors.lastName = 'First Name is Required!'
    }

    if(!formData.email.trim()){
      validationErrors.email = 'Email is Required!'
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
      validationErrors.email = 'Email is Not Valid!'
    }
    
    if(!formData.feedback.trim()){
      validationErrors.feedback = 'You must have to comment!'
    }
    setErrors(validationErrors)
    if(Object.keys(validationErrors).length === 0){
      alert(`Thanks for your feedback, ${formData.firstName} ${formData.lastName}! We’ll review your comments and send a response to ${formData.email} shortly.`)
    }
  }
  // console.log(errors);
  
  return (
    <div className='min-h-screen mx-auto mt-[70px] pt-[100px]'>
      <div>
        <div>
          <h1>Contact Us</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='firstName'>First Name<input type="text" id='firstName' name='firstName' placeholder='Enter Your First Name' onChange={onChange} />{errors.firstName && <span>{errors.firstName}</span>} </label>
                <label htmlFor='lastName'>Last Name<input type="text" id='lastName' name='lastName' placeholder='Enter Your Last Name' onChange={onChange}/>{errors.lastName && <span>{errors.lastName}</span>}</label>
              </div>
              <div>
                <label htmlFor='email'>Email<input type="text" id='email' name='email' placeholder='Enter Your Email Address' onChange={onChange}/>{errors.email && <span>{errors.email}</span>}</label>
              </div>
              <div>
                <label htmlFor='feedback'>Feedback  <textarea name="feedback" id="feedback" onChange={onChange}></textarea>{errors.feedback && <span>{errors.feedback}</span>}</label>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
