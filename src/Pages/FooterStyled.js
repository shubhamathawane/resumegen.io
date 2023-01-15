import styled from "styled-components";

//footer
export const Container = styled.div`
    background-color: white;
    color:black;
    height: auto;
    width: 100vw;
    font-family: 'JetBrains Mono', monospace;
    padding-top: 40px;
    /* color: #000; */

`
//footer_content
export const Footer_Content = styled.div`
    display: flex;
    /* color: white; */
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    h3{
        font-size: 1.8rem;
        font-weight: c 400;
        text-transform: capitalize;
        line-height: 3rem;
        color: gray;
    }
    p{
        max-width: 500px;
        margin: 10px auto;
        line-height: 28px;
        font-size: 14px;
    }
`

export const Socials = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
    li{
        margin: 0 10px;
    }
    a{
        text-decoration: none;
        color: white;
        :hover{
            color: aqua;
        }
    }
    a i{
        font-size: 1.1rem;
        transition: color .4s ease;
    }
`

export const Footer_bottom = styled.div`
    background-color:#67bc98;
    font-family: 'JetBrains Mono', monospace;
    width: 100vw;
    padding: 20px 0;
    text-align: center;
    p{
        font-size: 14px;
        white-space: 2px;
        text-transform: capitalize;
    }
    span{
        text-transform: uppercase;
        opacity: .4;
        font-weight:200;
    }
    a{
        :hover{
                text-decoration: underline;
        }
    }
`