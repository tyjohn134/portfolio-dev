import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#about">About</AnchorLink>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<AnchorLink href="#contact">Contact</AnchorLink>
		<a target="_blank" href="https://tylerjdev.sfo2.digitaloceanspaces.com/Tyler_Johnson_Resume_Website.pdf">Resume</a>
	</Wrapper>
)

export default NavbarLinks
