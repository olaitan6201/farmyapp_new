import React from "react";
import "toastr/build/toastr.min.css";
import SignUpFormWrapper from "./SignUpFormWrapper";
import Input from './Input';
import { useForm } from "../hooks/form";
import { VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../validation/Validators";


const SignULForm = () => {
	const [formState, inputHandler] = useForm(
		{  
			companyName: {
			value: "",
			isValid: false,
		  },
		   companyAddress: {
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
		  city: {
			value: "",
			isValid: false,
		  },
		  mobility: {
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
		companyName: formState.inputs.companyName.value,
		companyAddress: formState.inputs.companyAddress.value,
		email: formState.inputs.email.value,
		phoneNumber: formState.inputs.phoneNumber.value,
		city: formState.inputs.city.value,
		mobility: formState.inputs.mobility.value,
		password: formState.inputs.password.value,
	}

	return (
		<SignUpFormWrapper formData={formData} apiPath="logistics" formState={!formState.isValid}>
			<Input
            id="companyName"
            element="input"
            type="text"
            label="Company Name"
            placeholder="Your company name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your company name."
            onInput={inputHandler}
          />
		  <Input
            id="companyAddress"
            element="input"
            type="text"
            label="Company Address"
            placeholder="Enter the address to your company here"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your company address."
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
            id="city"
            element="select"
            label="city Of Operation"
			options={[
				{ value: '', displayValue: '' },
               { value: 'lagos', displayValue: 'Lagos' },
               { value: 'ibadan', displayValue: 'Ibadan' },
            ]}
            validators={[VALIDATOR_REQUIRE()]}
			errorText="Please enter your city of Operation."
            onInput={inputHandler}
          />
		 <Input
            id="mobility"
            element="select"
            label="Type Of Mobility"
			options={[
				{ value: '', displayValue: '' },
               { value: 'car', displayValue: 'Car' },
               { value: 'bus', displayValue: 'Bus' },
			   { value: 'bike', displayValue: 'Bike' },
            ]}
            validators={[VALIDATOR_REQUIRE()]}
			errorText="Please enter your type of mobility."
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
		</SignUpFormWrapper>
	);
};

export default SignULForm;
