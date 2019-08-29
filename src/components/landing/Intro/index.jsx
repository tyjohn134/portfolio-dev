import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>I’m Tyler. I’m a Software Engineer.</h4>
				<Button as={AnchorLink} href="#contact">
					Contact Me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Tyler. I'm a Software Engineer." />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
