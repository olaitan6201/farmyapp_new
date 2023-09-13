import React from "react";
import "toastr/build/toastr.min.css";
import SignUpFormWrapper from "./SignUpFormWrapper";
import Input from './Input';
import { useForm } from "../hooks/form";
import { VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../validation/Validators";


const SignUSForm = () => {
	const [formState, inputHandler] = useForm(
		{  
			storeName: {
			value: "",
			isValid: false,
		  },
		   storeAddress: {
			value: "",
			isValid: false,
		  },
		  city: {
			value: "",
			isValid: false,
		  },
		  state: {
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
		storeName: formState.inputs.storeName.value,
		storeAddress: formState.inputs.storeAddress.value,
		city: formState.inputs.city.value,
		state: formState.inputs.state.value,
		username: formState.inputs.username.value,
		email: formState.inputs.email.value,
		phoneNumber: formState.inputs.phoneNumber.value,
		password: formState.inputs.password.value,
	}

	return (
		<SignUpFormWrapper formData={formData} apiPath="store" formState={!formState.isValid}>
			<Input
            id="storeName"
            element="input"
            type="text"
            label="Store Name"
            placeholder="Your store name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your store name."
            onInput={inputHandler}
          />
		  <Input
            id="storeAddress"
            element="input"
            type="text"
            label="Store Address"
            placeholder="Enter the address to your store here"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your store address."
            onInput={inputHandler}
          />
		  <Input
            id="city"
            element="select"
            label="City"
			options={[
			   { value: '', displayValue: 'Enter your city of store operation here' },
               { value: 'lagos', displayValue: 'Lagos' },
               { value: 'ibadan', displayValue: 'Ibadan' },
            ]}
            validators={[VALIDATOR_REQUIRE()]}
			errorText="Please enter your city of store operation here."
            onInput={inputHandler}
          />
		  <Input
            id="state"
            element="select"
            label="State"
			options={[
			   { value: '', displayValue: 'Enter your state of store operation here' },
               { value: 'lagos', displayValue: 'Lagos' },
               { value: 'oyo', displayValue: 'Oyo' },
            ]}
            validators={[VALIDATOR_REQUIRE()]}
			errorText="Please enter your state of store operation here."
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
            errorText="Password not strong!."
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

export default SignUSForm;
