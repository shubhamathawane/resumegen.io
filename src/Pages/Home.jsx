import React from 'react'
import {Link} from 'react-router-dom'
import HomeImg from '../Resources/Devp.3d4490e1.png'
import { Container, Description, Heading, Main, Para, Button, File, Img_container, Dev } from './HomeStyled'



const Home = () => {
  return (
    <Main>
      <Container>
        <Description>
          <Heading>Resume Generator</Heading>
          <Para>Create the resume from following template</Para>
          <Link to="/form">
           <Button>Create One</Button>
          </Link>
          <h2>or UPLOAD JSON FILE</h2>
          <File type='file'/>
        </Description>
        <Img_container>
        <Dev src={HomeImg}/>
        </Img_container>
      </Container>
    </Main>
  )
}

export default Home