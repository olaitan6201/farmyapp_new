import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { FcGoogle } from 'react-icons/fc'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'
import axiosClient from '../clients/axios-client';

const SignUpFormWrapper = ({ apiPath = '', formData, hasFile = false, children, formState }) => {
	const navigate = useNavigate()

	const [isLoading, setLoading] = useState(false)

	const { fetchUserData } = useUserContext()

	toastr.options = {
		closeButton: true,
		progressBar: true,
		positionClass: "toast-top-right",
		timeOut: 5000,
		showMethod: "fadeIn",
		hideMethod: "fadeOut",
	};

	const displayError = (err) => {
		toastr.warning(err, "Sorry");
	};

	const handleSubmit = async (e) => {
		e.preventDefault()

	 if (apiPath.trim().length === 0) return;

		setLoading(true)

		axiosClient.defaults.headers = hasFile ? {
			"Content-Type": "multipart/form-data",
		} : {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}

		try {
			const authRes = await axiosClient.post(`/${apiPath}/`, JSON.stringify(formData))
			if (!authRes) return
 
			const res = await fetchUserData(apiPath)
			if (!res) return

			localStorage.setItem("USER_LOGGED_IN", "true");
			localStorage.setItem("USER_TYPE", apiPath);
			navigate('/myprofile');

		} catch (error) {
			displayError(error?.response?.message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='sign_form'>
			<form className="post_sign" onSubmit={handleSubmit}>

				{children}

				<button className={`sign_bt ${formState && 'disabled'}`}  disabled={isLoading || formState}>
					{isLoading ? (
						<span className='loading-spinner'></span>
					) : (
						'Submit'
					)}
				</button>
				<div className='dash-bt google-bt'>
				<p>-------- or ---------</p>
				</div>
				<button className='google-bt' disabled={isLoading}>
				<FcGoogle className='google-icon'/>
					{isLoading ? (
						<span className='loading-spinner'></span>
					) : (
						'Signin with Google'
					)}
				</button>
				<div className='already1'>Already have an account? <Link to='/signin' className='signalt'>Log in</Link></div>

			</form>
		</div>
	)
}

export default SignUpFormWrapper