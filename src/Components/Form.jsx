import React, { useEffect, useState } from "react";
import "../Styles/form.css";
import {
  Color,
  ColorType,
  Form_Container,
  Theme,
  Formm,
  Contact,
  Label,
  Section_Summary,
  Section_Skills,
  Section_Involvement,
  Item,
  Section_Education,
  Section_Experience,
  Section_Certification,
  Section_Projects,
  Section_interests,
} from "./FormStyle";
import Files from "react-files";
import { Heading } from "../Pages/HomeStyled";

const Form = ({ data, setData, preset, setColor, fonts, font, setFont }) => {
  var { name, photoUrl, location, phone, email, linkedin, github, website } =
    data.contact;

  var Involvement = data.Involvement;
  var Summary = data.Summary;
  var education = data.education;
  var experience = data.experience;
  var certifications = data.certifications;
  var projects = data.projects;
  var projects_link = data.projects_link;
  var awards = data.awards;

  const [show, setShow] = useState(false);

  const styled = {
    padding: "6px 8px",
    margin: "0 15px 15px 0",
    borderRadius: "5px",
    fontSize: "16px",
    backgroundColor: " #389969",
    color: "#fff",
    cursor: "pointer",
  };

  const handlePhotoUpload = (files) => {
    setData({
      ...data,
      contact: {
        ...data.contact,
        photoUrl: URL.createObjectURL(files[files.length - 1]),
      },
    });
  };

  const [skills, setSkills] = useState("");
  useEffect(() => {
    var temp = "";
    data.skills.map((item) => (temp = temp + item + ","));
    setSkills(temp);
  }, [data]);

  // interests
  const [interests, setInterests] = useState("");

  const changeColor = (item) => {
    setColor({
      primary: item.primary,
      background: item.background,
      skills: item.skills,
    });
  };

  const handleFontChange = (e) => {
    setFont(e.target.value);
    e.preventDefault();
  };

  const handleContact = (e) => {
    e.preventDefault();
    setData({
      ...data,
      contact: {
        ...data.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Add row
  const handleSkills = (e) => {
    var array = skills.split(",");
    setData({
      ...data,
      skills: array,
    });
    e.preventDefault();
  };

  const handleInterests = (e) => {
    e.preventDefault();
    var array = interests.split(",");
    setData({
      ...data,
      interests: array,
    });
  };

  const addRow = (section, structure) => {
    var temp = section;
    temp.push(structure);
    setData({
      ...data,
      section: temp,
    });
  };

  // Remove Row
  const deleteRow = (section, index) => {
    var temp = section;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      section: temp,
    });
  };

  const handleChange = (e, index, section, type) => {
    var temp = section;
    temp[index][type] = e.target.value;
    setData({
      ...data,
      section: temp,
    });
    e.preventDefault();
  };

  useEffect(() => {
    var temp = "";
    data.interests.map((item) => (temp = temp + item + ","));
    setInterests(temp);
  }, [data]);

  return (
    <div className="form-container">
      <div className="theme">
        <p>Select Theme:</p>
        <div className="color">
          {preset.map((item, key) => (
            <div
              key={key}
              className="colorType"
              onClick={() => changeColor(item)}
              style={{ backgroundColor: `${item.primary}` }}
            ></div>
          ))}
        </div>
      </div>
      <div className="theme">
        <p>Select Font</p>
        <select className="select" onChange={handleFontChange}>
          {fonts.map((font) => (
            <option style={{ fontFamily: `${font.value}` }} value={font.value}>
              {font.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <Files
            style={styled}
            className="file-btn"
            onChange={(files) => handlePhotoUpload(files)}
            onError={(err) => console.log(err)}
            accepts={["image/jpeg", "image/jpg", "image/png", "image/svg"]}
            multiple
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            Upload Photo
          </Files>
        </div>
      </div>
      <Formm>
        <div onChange={(e) => e.preventDefault()} className="contact">
          <hr />
          <div className="main-heading">
            <h2> Contact</h2>
            {/* <p onClick={() => setShow(!show)}>{show ? "-" : "+"}</p> */}
          </div>
          <div>
            {/* {show && ( */}
            <div className="answers">
              <Label>Photo URL</Label>
              <input
                type="text"
                name="photoUrl"
                value={photoUrl}
                onChange={handleContact}
              />
              <Label>Name</Label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleContact}
              />
              <Label>Address</Label>
              <input
                type="text"
                name="location"
                onChange={handleContact}
                value={location}
              />
              <Label>Phone</Label>
              <input
                type="text"
                name="phone"
                onChange={handleContact}
                value={phone}
              />
              <Label>Email</Label>
              <input
                type="text"
                name="email"
                onChange={handleContact}
                value={email}
              />
              <Label>LinkedIn</Label>
              <input
                type="text"
                name="linkedin"
                onChange={handleContact}
                value={linkedin}
              />
              <Label>Github</Label>
              <input
                type="text"
                name="linkedin"
                onChange={handleContact}
                value={github}
              />
              <Label>Website</Label>
              <input
                type="text"
                name="website"
                onChange={handleContact}
                value={website}
              />
            </div>
            {/* )} */}
          </div>
        </div>
        <Section_Summary>
          <div className="main-heading">
            <h2> Summary</h2>
            {/* <p onClick={() => setShow(!show)}>{show ? "-" : "+"}</p> */}
          </div>
          <div className="summary">
            {/* {show && ( */}
            <textarea
              name="Summary"
              cols="50"
              rows="5"
              value={Summary}
              onChange={(e) => setData({ ...data, Summary: e.target.value })}
            ></textarea>
            {/* )} */}
          </div>
        </Section_Summary>
        <Section_Skills>
          <hr />
          <div style={{ display: "flex" }}>
            <Heading>Skills</Heading>
            <button className="btnDone" onClick={handleSkills}>
              Done
            </button>{" "}
            <br />
            <textarea
              name="skills"
              cols="50"
              rows="5"
              className="textAreas"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            ></textarea>
          </div>
        </Section_Skills>
        <Section_interests>
          <hr />
          <div style={{ display: "flex" }}>
            <Heading>Interests</Heading>
            <button className="btnDone" onClick={handleInterests}>
              Done
            </button>
            <textarea
              name="skills"
              cols="50"
              rows="5"
              className="textAreas"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            ></textarea>
          </div>
        </Section_interests>
        <hr />
        <Heading>Involvement</Heading>
        <Section_Involvement>
          {Involvement.map((item, index) => {
            return (
              <div className="row container-fluid" key={index}>
                <div className="item">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={item.name}
                    onChange={(e) =>
                      handleChange(e, index, Involvement, "name")
                    }
                  />
                  <textarea
                    name="position"
                    cols="30"
                    rows="3"
                    placeholder="Position"
                    value={item.position}
                    onChange={(e) =>
                      handleChange(e, index, Involvement, "position")
                    }
                  />
                </div>
                <button
                  className="btn btn-sm btn-danger remove"
                  onClick={() => deleteRow(Involvement, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="add btn btn-sm btn-dark"
            onClick={() => addRow(Involvement, { name: "", position: "" })}
          >
            Add
          </button>
        </Section_Involvement>
        <Heading>Education</Heading>
        <hr />
        <Section_Education>
          {education.map((item, index) => {
            return (
              <div className=" row container-fluid" key={index}>
                <Item>
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    onChange={(e) => handleChange(e, index, education, "year")}
                  />
                  <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={item.course}
                    onChange={(e) =>
                      handleChange(e, index, education, "course")
                    }
                  />
                  <input
                    type="text"
                    name="institution"
                    placeholder="Institution"
                    value={item.institution}
                    onChange={(e) =>
                      handleChange(e, index, education, "institution")
                    }
                  />
                  <input
                    type="number"
                    name="percentage"
                    placeholder="Percentage/GPA"
                    value={item.percentage}
                    onChange={(e) =>
                      handleChange(e, index, education, "percentage")
                    }
                  />

                  <button
                    className="remove btn"
                    onClick={() => deleteRow(education, index)}
                  >
                    Remove
                  </button>
                </Item>
              </div>
            );
          })}
          <button
            className="add btn"
            onClick={() =>
              addRow(education, {
                year: "",
                course: "",
                institution: "",
                university: "",
                percentage: "",
              })
            }
          >
            Add
          </button>
        </Section_Education>
        <Heading>Experience</Heading>
        <hr />
        <Section_Experience>
          {experience.map((item, index) => {
            return (
              <div className="row container-fluid" key={index}>
                <Item>
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    onChange={(e) => handleChange(e, index, experience, "year")}
                  />
                </Item>
                <Item>
                  <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={item.position}
                    onChange={(e) =>
                      handleChange(e, index, experience, "position")
                    }
                  />
                </Item>
                <Item>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={item.company}
                    onChange={(e) =>
                      handleChange(e, index, experience, "company")
                    }
                  />
                  <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) =>
                      handleChange(e, index, experience, "description")
                    }
                  ></textarea>
                </Item>
                <button
                  className="remove btn"
                  onClick={() => deleteRow(experience, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn add dark"
            onClick={() =>
              addRow(experience, {
                year: "",
                company: "",
                position: "",
                description: "",
              })
            }
          >
            Add
          </button>
        </Section_Experience>
        <hr />
        <Heading>Certification</Heading>
        <Section_Certification>
          {certifications.map((item, index) => {
            return (
              <div className="row container" key={index}>
                <Item>
                  <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={item.course}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "course")
                    }
                  />
                  <input
                    type="text"
                    name="institution"
                    placeholder="Institution"
                    value={item.institution}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "institution")
                    }
                  />
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "year")
                    }
                  />
                  <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "description")
                    }
                  ></textarea>
                  <button
                    className="remove btn"
                    onClick={() => deleteRow(certifications, index)}
                  >
                    Remove
                  </button>
                </Item>
              </div>
            );
          })}
          <button
            className="btn add dark"
            onClick={() =>
              addRow(certifications, {
                year: "",
                institution: "",
                course: "",
                description: "",
              })
            }
          >
            Add
          </button>
        </Section_Certification>
        <Heading>Projects</Heading>
        <hr />
        <Section_Projects>
          {projects.map((item, index) => {
            return (
              <div className="row container" key={index}>
                <Item>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={item.title}
                    onChange={(e) => handleChange(e, index, projects, "title")}
                  />
                  <input
                    type="text"
                    name="link"
                    placeholder="Project URL"
                    value={item.link}
                    onChange={(e) => handleChange(e, index, projects, "link")}
                  />
                  <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) =>
                      handleChange(e, index, projects, "description")
                    }
                  ></textarea>
                  <button
                    className="btn remove btn"
                    onClick={() => deleteRow(projects, index)}
                  >
                    Remove
                  </button>
                </Item>
              </div>
            );
          })}
          <button
            className="btn add btn-dark"
            onClick={() =>
              addRow(projects, { title: "", link: "", description: "" })
            }
          >
            Add
          </button>
        </Section_Projects>
      </Formm>
    </div>
  );
};

export default Form;
