import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m Tyler. I build web applications." />
			</Thumbnail>
			<Details>
				<h1>About Me</h1>
				<p>
					I recently graduated from Old Dominion University with a Bacholers in Computer Science. I enjoy working
					on both front-end and back-end projects. I'm currently learning VueJS and GraphQL.
				</p>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
