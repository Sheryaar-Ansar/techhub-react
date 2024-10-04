import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen mx-auto mt-[70px] pt-[100px]'>
      <div>
        <div>
          <h1>Contact Us</h1>
          <div>
            <form >
              <div>
                <label>First Name<input type="text" placeholder='Enter Your First Name' /></label>
                <label>Last Name<input type="text" placeholder='Enter Your Last Name' /></label>
              </div>
              <div>
                <label>Email<input type="text" placeholder='Enter Your Email Address' /></label>
              </div>
              <div>
                <label>Feedback  <textarea name="" id=""></textarea></label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
