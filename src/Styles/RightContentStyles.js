import styled from "styled-components";

export const HR = styled.hr`
  /* margin: 1.5px 0 55px 0;
  width: 640px;
  border: 0.5px solid #263238; */
  background: #009688;

`;

export const Heading = styled.p`
  font-size: 19px;
  font-weight: bold;
  /* margin-right: 750px; */
  margin: ;
  color: #263238;
`;

export const Sumary = styled.div`
  padding: 10px 10px 5px 10px;
`;

export const Item = styled.div`
  font-size: 13.5px;
  text-align: justify;
  text-justify: inter-word;
  color: #2e2e2e;
`;

export const Educationn = styled.div`
  padding: 10px 10px 0 10px;
  font-size: 14px;
`;
export const Certification = styled.div`
  padding: 10px 10px 0 10px;
  font-size: 14px;
`;
export const Experiencee = styled.div`
  padding: 10px 10px 0 10px;
  font-size: 14px;
`;
export const Projectz = styled.div`
  padding: 10px 10px 0 10px;
  font-size: 14px;
`;

export const RowTable = styled.div`
  width: calc(100% -10px);
  display: flex;
  padding: 5px 5px 5px;
  border-bottom: 1px dashed #e5e5e5;
  :last-child {
    border-bottom: none;
  }
  .left-column {
    width: 250px;
    padding: 0;
  }
`;
export const Year = styled.div`
  font-size: 13px;
  color: #4e4e4e;
  margin: 0 0 0 5px;
`;

export const Score = styled.div`
  margin: 6px 0 5px 21px;
  font-size: 14px;
  font-weight: bold;
  color: #2e2e2e;
`;

// row table

export const RightColumn = styled.div`
  hr {
    margin: 1.5px 0 5px 0;
    width: 100%;
    border: 0.5px solid #263238;
  }
`;

export const Course = styled.div`
  font-size: 14px;
  margin: 0;
  color: #2e2e2e;
`;
export const Position = styled.div`
  font-size: 14px;
  margin: 0;
  color: #2e2e2e;
`;
export const Title = styled.div`
  font-size: 14px;
  margin: 0;
  color: #2e2e2e;
`;

export const Institution = styled.div`
  margin: 4px 0 0;
  font-size: 13.5px;
  color: #2e2e2e;
  font-weight: bold;
`;
export const Company = styled.div`
  margin: 4px 0 0;
  font-size: 13.5px;
  color: #2e2e2e;
  font-weight: bold;
`;
export const Description = styled.div`
  font-size: 13.5px;
  margin: 4px 0 0 0;
  color: #4e4e4e;
`;

export const Repo = styled.div`
  font-size: 13.5px;
  margin: 8px 0 5px 0;
  a {
    color: #263238;
    text-decoration: underline;
  }
`;
