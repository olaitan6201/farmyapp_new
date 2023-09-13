import React from "react";
import "toastr/build/toastr.min.css";
import SignUpFormWrapper from "./SignUpFormWrapper";
import Input from './Input';
import { useForm } from "../hooks/form";
import { VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../validation/Validators";

const SignUFForm = () => {
	const [formState, inputHandler] = useForm(
		{  
			farmName: {
			value: "",
			isValid: false,
		  },
		   farmAddress: {
			value: "",
			isValid: false,
		  },
		  city: {
			value: "",
			isValid: false,
		  },
		  username: {
			value: "",
			isValid: false,
		  },
		  email: {
			value: "",
			isValid: false,
		  },
		 phoneNumber: {
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
		farmName: formState.inputs.farmName.value,
		farmAddress: formState.inputs.farmAddress.value,
		city: formState.inputs.city.value,
		username: formState.inputs.username.value,
		email: formState.inputs.email.value,
		phoneNumber: formState.inputs.phoneNumber.value,
		password: formState.inputs.password.value,
	}
	 

	return (
		<SignUpFormWrapper formData={formData} apiPath="farm" formState={!formState.isValid}>
			<Input
            id="farmName"
            element="input"
            type="text"
            label="Farm Name"
            placeholder="Your farm name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your farm name."
            onInput={inputHandler}
          />
		  <Input
            id="farmAddress"
            element="input"
            type="text"
            label="Farm Address"
            placeholder="Enter the address to your farm here"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your farm address."
            onInput={inputHandler}
          />
		   <Input
            id="city"
            element="select"
            label="City"
			options={[
			   { value: '', displayValue: 'Enter your city of farm operation here' },
               { value: 'lagos', displayValue: 'Lagos' },
               { value: 'ibadan', displayValue: 'Ibadan' },
            ]}
            validators={[VALIDATOR_REQUIRE()]}
			errorText="Please enter your city of farm operation here."
            onInput={inputHandler}
          />
		  <Input
            id="username"
            element="input"
            type="text"
            label="Username"
            placeholder="Enter your username here"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a userName."
            onInput={inputHandler}
          />
		  <Input
            id="email"
            element="input"
            type="text"
            label="Email"
            placeholder="Your email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter your correct email address."
            onInput={inputHandler}
          />
		   <Input
            id="phoneNumber"
            element="input"
            type="text"
            label="Phone Number"
            placeholder="Enter your correct phone number here"
            validators={[VALIDATOR_MAXLENGTH(11)]}
            errorText="Please enter your phone number."
            onInput={inputHandler}
          />
		  <Input
            id="password"
            element="input"
            type="password"
            label="Password"
            placeholder="Enter your password here"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter your password."
            onInput={inputHandler}
          />
		  <div className="form_terms">
		  <Input
            id="terms"
            element="checkbox"
            type="checkbox"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
          />
		  <p className="form_terms_msg">I have agreed to FarmyApp Terms and Conditons</p>
		  </div>
		</SignUpFormWrapper>
	);
};

export default SignUFForm;
