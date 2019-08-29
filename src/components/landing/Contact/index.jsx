import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="contact">
		<Details>
			<h1 >Send me a message:</h1>
			<ContactForm />
		</Details>
		<Thumbnail>
			<img src={contact} alt="I’m Tyler and I'm a aspiring Software Engineer!" />
		</Thumbnail>
	</Wrapper>
)
