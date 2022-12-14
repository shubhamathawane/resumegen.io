import styled from "styled-components";

export const Summery = styled.div`
  padding: 10px 10px 5px 10px;
`;
export const P = styled.p`
  font-size: 20px;
  font-weight: bold;
  span {
  font-size: 15px;
  margin-right: 6px;
  color: #263238;
`;
export const HR = styled.hr`
  margin: 6px 0 8px 0;
  color: #59d69c;
  border: 0.5px solid;
  a {
    color: #263238;
    text-decoration: none;
  }
`;
export const Item = styled.div`
  float: left;
  padding: 2px 5px;
  margin: 5px 8px 5px 0;
  border-radius: 5px;
  color: #1e1e1e;
  text {
    margin: 5px 0 2px;
    padding: 0;
  }
`;

export const Skils = styled.div`
  padding: 25px 5px 0 10px;
  text {
      font-size: 14px;
      color: #0c0c0c;
    }
    .heading {
      font-size: 15px;
      margin-right: 6px;
      color: #263238;
    }
    item{
      margin: 5px 0 2px;
      padding: 0;
    }
`;
export const Skill_Container = styled.div`
  width: 100%;
  display: inline-block;
  .item {
    float: left;
    padding: 2px 5px;
    margin: 5px 8px 5px 0;
    border-radius: 5px;
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;
