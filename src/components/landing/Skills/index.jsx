import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m Tyler and I’m a Software Engineer" />
			</Thumbnail>
			<Details>
				<h1>Hi There!</h1>
				<p>
					I'm a programmer based out of the Northern Virginia area. I recently graduated 
					from Old Dominion University with a Bacholers in Computer Science. I enjoy working
					on both front-end and back-end projects. I'm currently learning VueJS and GraphQL.
				</p>
				<Button as={AnchorLink} href="#contact">
					Contact Me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
