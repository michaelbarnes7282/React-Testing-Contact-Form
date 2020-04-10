import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label id='firstName' htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            placeholder="bill"
            data-testid= "first-input"
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.firstName && (
            <p data-testid="firstError">Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label id="lastName" htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            placeholder="luo"
            data-testid="last-input"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label id='email' htmlFor="email" >
            Email*
          </label>
          <input 
            placeholder="bluebill1049@hotmail.com"
            name="email"
            data-testid="email-input" 
            ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label id='message' htmlFor="message">Message</label>
          <textarea 
          name="message" 
          data-testid="message-input"
          ref={register({ required: false })} />
        </div>
        {data && (
          <pre
            data-testid= "pre-message"
            style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input 
        data-testid="submit"
        type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
