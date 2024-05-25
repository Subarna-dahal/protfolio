import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './css/Contact.css';

const Contact = () => {
  const formRef = useRef();
  const[messages,setErrorMessage]=useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); 

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setIsSuccess(false); // Reset success state

    try {
      await emailjs
        .sendForm('service_h53vfik', 'template_hfhxnqd', formRef.current, '4fOhM7nSeH7IAOW7P')
        .then(() => {
          console.log('SUCCESS!');
          toast.success("Email sent successfully!", { autoClose: 5000 });
          setIsSuccess(true); 
        });
    } catch (error) {
      console.error('FAILED...', error.text);
      setErrorMessage("Failed to send email. Please try again later.");
      toast.error("Failed to send email!", { autoClose: 5000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearForm = () => { 
    formRef.current.reset();
  };

  return (
    <div className="contact-container">
      <ToastContainer />
      <form ref={formRef} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="messages" required />

        {isSubmitting ? (
          <button disabled>Sending...</button>
        ) : (
          <input type="submit" value="Send" />
        )}
      </form>
      {isSuccess && (
        <div>
          <p>Email sent successfully!</p>
          <button onClick={clearForm}>Send Another Email</button>
        </div>
      )}
    </div>
  );
};

export default Contact;
