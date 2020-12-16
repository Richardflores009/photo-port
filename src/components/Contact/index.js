import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message} = formState;
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })

      }
      
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
    //   console.log(formState);
// JSX
return(
    <section>
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit} >
            {/* name input  */}
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onChange={handleChange} />
            </div>
            {/* email input  */}
            <div>
                <label htmlFor="email">Eamil Address:</label>
                <input type="email" name="email" defaultValue={email} onChange={handleChange} />
            </div>
            {/* message text area */}
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} rows="5" onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
);

}
    
    export default ContactForm;