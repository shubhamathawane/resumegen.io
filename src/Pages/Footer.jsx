import { purple } from '@mui/material/colors'
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
                <p>Created with ♥ by<a href="https://github.com/shubhamathawane/" style={{color: "white"}}> Shubham Athawane</a> </p>
            </Footer_bottom>
        </Footer_Content>
    </Container>
  )
}

export default Footer