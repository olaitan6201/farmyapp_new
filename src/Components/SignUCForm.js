import React, { useState } from "react";
import "toastr/build/toastr.min.css";
import SignUpFormWrapper from "./SignUpFormWrapper";
import Input from './Input';
import { useForm } from "../hooks/form";
import { VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../validation/Validators";

// import loho from '../static/FARMY EMB green..png'
// import SignUTargetM from './SignUTargetM'

const SignUFForm = () => {
	const [avatar, setAvatar] = useState(null);
	const [formState, inputHandler] = useForm(
		{  
			name: {
			value: "",
			isValid: false,
		  },
		   username: {
			value: "",
			isValid: false,
		  },
		  phoneNumber: {
			value: "",
			isValid: false,
		  },
			email: {
				value: "",
				isValid: false,
			  },
		  password: {
			value: "",
			isValid: false,
		  }
		},
		false
	  );

    const formData = {
		name: formState.inputs.name.value,
		username: formState.inputs.username.value,
		email: formState.inputs.email.value,
		phoneNumber: formState.inputs.phoneNumber.value,
		password: formState.inputs.password.value,
		avatar: avatar
	}
	 

	const handleInput = (e) => {
		const { type, files } = e.target;
	
		if (type === "file") {
		  setAvatar(files[0]);
		} 
	  };

	

	return (
		<SignUpFormWrapper formData={formData} apiPath="user" hasFile formState={!formState.isValid}>
			<Input
            id="name"
            element="input"
            type="text"
            label="Full Name"
            placeholder="Your full name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your full name."
            onInput={inputHandler}
          />
		  <Input
            id="email"
            element="input"
            type="text"
            label="Email"
            placeholder="Enter your email address"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter your correct email address."
            onInput={inputHandler}
          />
		  <Input
            id="username"
            element="input"
            type="text"
            label="Username"
            placeholder="Enter your username"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your username."
            onInput={inputHandler}
          />
		  <Input
            id="phoneNumber"
            element="input"
            type="text"
            label="Phone Number"
            placeholder="Enter your correct phone number here"
            validators={[VALIDATOR_MAXLENGTH(11)]}
            errorText="Please enter your correct phone number here."
            onInput={inputHandler}
          />
		  <Input
            id="password"
            element="input"
            type="password"
            label="Password"
            placeholder="Enter your password here"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Password not strong!."
            onInput={inputHandler}
          />
		  <div className="waitlist_post">
		  <label className="form_label">Display Image</label>
		  <input
			type="file"
			onChange={handleInput}
			className="custom-file-input"
			id="avatar"
			accept="image/*"
		  />
		  <br />

		  <div className="image-preview-container">
          {avatar && (
            <div className="image-preview">
              <img
                src={URL.createObjectURL(avatar)}
                alt={`avatar`}
              />
            </div>
          )}
        </div>
      </div>
		</SignUpFormWrapper>
	);
};

export default SignUFForm;
