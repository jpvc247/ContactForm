import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <form>
            <h2>Contact Us</h2>


            <div className="container">
                <div className="input-box">
                <label>
                    First Name <span className="required-asterisk">*</span>
                </label>
                <br />
                <input id="namewidth" type="text" className='field' required />
                </div>

                <div className="input-box">
                <label>
                    Last Name <span className="required-asterisk">*</span>
                </label>
                <br />
                <input id="namewidth" type="text" className='field' required />
                </div>

            </div>
               
                <div className="input-box">
                    <label id="inputwidth">
                        Email <span className="required-asterisk">*</span>
                    </label>
                    <br />
                    <input id="inputwidth" type="email" className='field' required />
                
                </div>
                <br />

                <div>
                    <label>Message <span className="required-asterisk">*</span> </label><br />
                    <textarea rows="8" id="inputwidth" name=""></textarea>
                </div>

                <br /><br />
                <div>
                    <button id="btn" type="submit">Submit</button>
                </div>
              
        </form>
    </section>
  )
}

export default Contact