import React from 'react'
import { Container, Footer_bottom, Footer_Content, Socials } from './FooterStyled'
 
const Footer = () => {
  return (
    <Container>
        <Footer_Content>
            <h1>ResumeGen.io</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ab enim corporis, totam rem adipisci modi molestiae accusantium laborum officia? Aspernatur, quo error quos repudiandae possimus in necessitatibus dicta sint.</p>
            <Socials>
                <li><a href="">Facebook</a></li>
            </Socials>
            <Footer_bottom>
                <p>Copyright &copy;2022 ResumeGen.io </p>
            </Footer_bottom>
        </Footer_Content>
    </Container>
  )
}

export default Footer