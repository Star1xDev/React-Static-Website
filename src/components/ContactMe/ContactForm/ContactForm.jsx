import React from 'react';
import "./ContactForm.css"

const ContactForm = () => {
    return (
        <div className="contact-form-content">
            <form>
                <div className="name-container">
                    <input type="text" name='firstname' placeholder='first name' />
                    <input type="text" name='lastname' placeholder='last name' />
                </div>
                <input type="text" name='email' placeholder='Email' />
                <textarea name="message"  rows="3"></textarea>
                <button>SEND</button>
            </form>
        </div>
    );
}

export default ContactForm;
