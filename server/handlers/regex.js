module.exports = {
	// regex for validating email
	emailRegex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,

	// regex for validating mobile number
	mobileRegex: /^[0-9]*$/,

	// regex for validating password
	passwordRegex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
}