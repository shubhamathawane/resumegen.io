import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  overflow: hidden;
  background-color: white;
  color: gray;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Container = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-right: 60px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  margin: 1.5rem;
  margin-left: 6rem;
  flex: 0.4;
`;

export const Heading = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  width: 98%;
  word-spacing: 5px;
`;

export const Para = styled.p`
  margin-top: 9%;
  font-size: 1.2rem;
  word-spacing: 2px;
  width: 70%;
`;

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  /* font-family: jetBrains Mono; */
  gap: 5px;
  margin-top: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.75rem 1.3rem;
  background-size: 300% 100%;
  transition: 0.5s ease;
  /* background-color: rgb(194, 194, 194); */
  background-image: linear-gradient(to right, #46da66, #25c099, #139741);

  box-shadow:-4px -4px 6px #bbbabaea;
  :hover {
    background-position: 80% 0;
    transition: all 0.4s ease-in-out;
    color: #252020;
    background-color: white;
  }
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

export const File = styled.input`
  border-radius: 5px;
  border: none;
  /* font-family: jetBrains Mono; */
  gap: 5px;
  margin-top: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  width: 50%;
  padding: 0.75rem 1.3rem;
  transition: 0.5s ease;
  background-color: rgb(194, 194, 194);
  :hover {
    background-position: 80% 0;
    transition: all 0.4s ease-in-out;
    color: #252020;
    background-color: white;
  }
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

export const Img_container = styled.div`
  flex: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

export const Dev = styled.img`
  width: 540px;
  pointer-events: none;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
`;
