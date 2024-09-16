import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
        <form>
            <h2>Contact Us</h2>


            <div className="container">
                <div className="input-box">
                    <label>First Name</label><br />
                    <input type="text" className='field' placeholder='Enter your name' required />
                </div>

                <div className="input-box">
                    <label>Last Name</label><br />
                    <input type="text" className='field' placeholder='Enter your name' required />
                </div>

            </div>


            <div className="input-box">
                <label>Email Address</label><br />
                <input type="text" className='field' placeholder='Enter your name' required />
            </div>




            <div className="container">
                <h3>Query Type</h3>
                <div className="input-box">
                    {/* <label>General Enquiry</label><br /> */}
                    <input type="text" className='field' placeholder='Enter your name' required />
                    <label className="radio-container">
                    <input type="radio" name="radio-group" />
                    <span className="radio-button"></span>
                    </label>

                </div>

                <div className="input-box">
                    <label>Support Request</label><br />
                    <input type="text" className='field' placeholder='Enter your name' required />
                </div>

            </div>

           


        </form>
    </section>
  )
}

export default Contact