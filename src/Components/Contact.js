import React from 'react';
import PhoneInput, { format, normalize } from "react-phone-input-auto-format";
 
const onChange = phoneNumber => {
  const formatted = format(phoneNumber);
  const normalized = normalize(phoneNumber);
};

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.isHome();
	}
	
	render() {
		return(
			<div className="Contact-container">
				<form action="https://formspree.io/jasminmtrotter@gmail.com" method="POST">
					<label>Name:</label>
					<input type="text" name="name" />
					<label>Email:</label>
					<input type="email" name="_replyto" />
					<label>Phone:</label>
					<PhoneInput name="phone" />
					<label>Message:</label>
					<textarea name="message"></textarea>
					<input type="submit" value="Send" />
				</form>
			</div>
		);
	}
}

// pattern="^[2-9]\d{2}-\d{3}-\d{4}$"