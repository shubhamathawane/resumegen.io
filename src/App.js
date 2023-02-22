import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Form from "./Components/Form";
import { useEffect, useRef, useState } from "react";
import jsonData from "./data.json";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";
import Resumes from "./Components/Resumes";
import "./Styles/App.css";

const Left = styled.div`
  width: 32%;
  background-color: #1a1919;
  color: rgb(249, 250, 248);
  position: absolute;
  height: 100%;
  overflow-y: auto;
`;

const Right = styled.div`
  width: 68%;
  position: absolute;
  right: 0;
  height: 100%;
  overflow-y: auto;
`;

const Button = styled.button`
  padding: 5px 13px;
  border-radius: 4px;
  font-size: 15px;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px 25px;
  color: rgb(239, 245, 243);
  cursor: pointer;
  background-color: #31a153cc;
`;

function App() {
  const [data, setData] = useState();
  const [preset, setPreset] = useState([
    { primary: "#009688", background: "#ebf5f4", skills: "#e5f4f3" },
    { primary: "#2196f3", background: "#e8f4fe", skills: "#e2f2ff" },
    { primary: "#263238", background: "#f0f0f0", skills: "#e0e0e0" },
    { primary: "#3f51b5", background: "#ebedf7", skills: "#e1e3f8" },
  ]);

  const fonts = [
    { label: "Calibri", value: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", id: 1 },
    { label: "Times New Roman", value: "Times New Roman", id: 2 },
    { label: "Arial", value: "Arial", id: 3 },
    { label: "Verdana", value: "Verdana", id: 4 },
    { label: "Cambria", value: "Cambria", id: 5 },
    { label: "Havtic", value: "'Roboto', Helvetica, 'sans-serif'", id:6}
  ];




  const [font, setFont] = useState("");

  const [color, setColor] = useState({
    primary: "#009688",
    background: "#e5f4f3",
    skills: "#e5f4f3",
  });

  useEffect(() => {
    setData(jsonData);
    console.log(data);
  }, []);

  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/form"
            element={
              data !== undefined && (
                <>
                  <Left>
                    <Form
                      data={data}
                      setData={setData}
                      preset={preset}
                      setColor={setColor}
                      color={color}
                      setPreset={setPreset}
                      font={font}
                      fonts={fonts}
                      setFont={setFont}
                    />
                  </Left>

                  <Right>
                    <Resumes
                      ref={printRef}
                      data={data}
                      font={font}
                      color={color}
                    />
                  </Right>

                  <Button onClick={handlePrint}>Download CV</Button>
                </>
              )
            }
          />

          {/* <Route path="/form">
            {data == undefined && (
              <>
                <Form
                  data={data}
                  setData={setData}
                  preset={preset}
                  setColor={setColor}
                />
                <Resumes ref={printRef} data={data} color={color} />
                <button className="printBtn" onClick={handlePrint}>
                  Download CV
                </button>
              </>
            )}
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
