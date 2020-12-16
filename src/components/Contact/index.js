import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
          }  
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
    //   console.log(formState);
// JSX
return(
    <section>
        <h1 data-testid="contact">Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit} >
            {/* name input  */}
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            {/* email input  */}
            <div>
                <label htmlFor="email">Eamil Address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            {/* message text area */}
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

            </div>
            <button data-testid="submit" type="submit">Submit</button>
        </form>
    </section>
);

}
    
    export default ContactForm;