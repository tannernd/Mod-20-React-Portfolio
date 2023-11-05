import { useState } from 'react';
// Here we import a helper function that will check if the email and other text is valid
import { validateEmail } from '../utils/helpers';

const styles = {
    inputMaxWidth: {
        maxWidth: "500px"
      }
  };

function ContactPage() {
    const [email, setEmail] = useState('');
    const [contactName, setContactName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        //Get the value and name of the input that was triggered by the change.
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'contactName') {
            setContactName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleBlurEmail = (e) => {
        if (!validateEmail(email)) {
            setErrorMessage('Your email is invalid.');
            return;
        }
        setErrorMessage('');
    }

    const handleBlurContact = (e) => {
        if (!contactName) {
            setErrorMessage('Please enter your name.');
            return;
        }
        setErrorMessage('');
    }

    const handleBlurMessage = (e) => {
        
        if (!message) {
            setErrorMessage('Message is required.');
            return;
        }
        setErrorMessage('');
    }

    const handleFormSubmit = (e) => {
        //Prevent default form submit behavior
        e.preventDefault();
        //Validate the email, Contact Name, and Message is filled out        
        if (!contactName) {
            setErrorMessage('Please enter your name.');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('Your email is invalid.');
            return;
        }
        if (!message) {
            setErrorMessage('Message is required.');
            return;
        }

        alert(`Thank you for reaching out to me.`);

        //if all inputs are valid, clear the inputs
        setContactName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
    <div className="container-fluid">
      <h1>Contact Nate</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group">
            <label htmlFor="contactName">Name:</label>
            <input
            className="form-control"
            id="contactName"
            style={styles.inputMaxWidth}
            value={contactName}
            name="contactName"
            onChange={handleInputChange}
            onBlur={handleBlurContact}
            type="text"
            placeholder="Your Name"
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
            className="form-control"
            id="email"
            style={styles.inputMaxWidth}
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleBlurEmail}
            type="text"
            placeholder="Email"
            />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
            className="form-control"  
            id="message"          
            style={styles.inputMaxWidth}
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleBlurMessage}
            placeholder="Message Text"
            rows="5"
            ></textarea>
        </div>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        <button className="btn btn-secondary my-3 " type="submit">Submit form</button>
      </form>
      
    </div>
    )
}

export default ContactPage;