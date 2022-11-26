import React from "react";
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
} from "./FormStyle";
import Files from "react-files";
import { Heading } from "../Pages/HomeStyled";

const Form = ({ data, setData, preset, setColor }) => {

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
      contact:{
        ...data.contact,
        photoUrl: URL.createObjectURL(files.length -1),
      },
    })
  }

  return (
    <Form_Container>
      <Theme>
        <p>Select Theme</p>
        <Color>
          <ColorType>1, 2, 4,</ColorType>
        </Color>
      </Theme>

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
        <Contact>
          <hr />
          <Heading>Contact</Heading>
          <Label>Photo URL</Label>
          <input
            type="text"
            name="photoUrl"
            // value={}
            // onChange={}
          />
          <Label>Name</Label>
          <input
            type="text"
            name="name"
            //  value={name}
            //  onChange={handleContact}
          />
          <Label>Address</Label>
          <input
            type="text"
            name="location"
            // onChange={handleCantact}
            // value={}
          />
          <Label>Phone</Label>
          <input
            type="text"
            name="phone"
            // onChange={handleCantact}
            // value={}
          />
          <Label>Email</Label>
          <input
            type="text"
            name="email"
            // onChange={handleCantact}
            // value={}
          />
          <Label>LinkedIn</Label>
          <input
            type="text"
            name="linkedin"
            // onChange={handleCantact}
            // value={}
          />
          <Label>Github</Label>
          <input
            type="text"
            name="linkedin"
            // onChange={handleCantact}
            // value={}
          />
          <Label>Website</Label>
          <input
            type="text"
            name="website"
            // onChange={handleCantact}
            // value={}
          />
        </Contact>
        <Section_Summary>
          <hr />
          <Heading>Summary</Heading>
          <textarea
            name="Summary"
            cols="50"
            rows="5"
            //  value={Summary}
            // onChange={}
          ></textarea>
        </Section_Summary>
        <Section_Skills>
          <hr />
          <div style={{ display: "flex" }}>
            <Heading>Skills</Heading>
            <button
            // onClick={}
            >
              Done
            </button>
            <textarea
              name="skills"
              cols="50"
              rows="5"
              //  onChange={}
            ></textarea>
          </div>
        </Section_Skills>
        <Section_Skills>
          <hr />
          <div style={{ display: "flex" }}>
            <Heading>Interests</Heading>
            <button
            // onClick={}
            >
              Done
            </button>
            <textarea
              name="skills"
              cols="50"
              rows="5"
              //  onChange={}
            ></textarea>
          </div>
        </Section_Skills>
        <div className=""></div>
        <Section_Involvement>
          <hr />
          <Heading>Involvement</Heading>
          <div className="row container-fluid">
            <Item>
              <input
                type="text"
                name="name"
                placeholder="Name"
                // onChange={}
              />
              <textarea
                name="position"
                cols="30"
                rows="3"
                placeholder="Position"
                // value={}
                // onChange={}
              ></textarea>
            </Item>
            <button>Remove</button>
            <button>Add</button>
          </div>
        </Section_Involvement>
        <Section_Education>
          <hr />
          <Heading>Education</Heading>
          <div className="row container-fluid">
            <Item>
              <input
                type="text"
                name="year"
                placeholder="Year"
                // value={}
                // onChange={}
              />
              <input
                type="text"
                name="course"
                placeholder="Course"
                // value={}
                // onChange={}
              />
              <input
                type="text"
                name="institution"
                placeholder="Institution"
                // value={}
                // onChange={}
              />
              <input
                type="number"
                name="percentage"
                placeholder="Percentage/GPA"
                // value={}
                // onChange={}
              />
              <button>Remove</button>

              <button
                className="btn"
                //  onClick={}
              >
                Add
              </button>
            </Item>
          </div>
        </Section_Education>
        <Section_Experience>
          <hr />
          <Heading>Experience</Heading>
          <div className="row container-fluid">
            <Item>
              <input
                type="text"
                name="year"
                placeholder="Year"
                // value={}
              />
            </Item>
            <Item>
              <input
                type="text"
                name="position"
                placeholder="Position"
                // value={}
              />
            </Item>
            <Item>
              <input
                type="text"
                name="company"
                placeholder="Company"
                // value={}
              />
              <textarea
                name="description"
                cols="30"
                rows="5"
                placeholder="Description"
                //  value={}
                // onChange={}
              ></textarea>
            </Item>
            <button className="btn">Remove</button>
            <button className="btn dark">Add</button>
          </div>
        </Section_Experience>
        <Section_Certification>
          <hr />
          <Heading>Certification</Heading>
          <div className="row container">
            <Item>
              <input
                type="text"
                name="year"
                placeholder="Year"
                // value={}
              />
              <input
                type="text"
                name="course"
                placeholder="Course"
                // value={}
              />
              <input
                type="text"
                name="institution"
                placeholder="Institution"
                // value={}
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                // value={}
              />
              <textarea
                name="description"
                cols="30"
                rows="5"
                placeholder="Description"
                //  value={}
              ></textarea>
              <button className="btn">Remove</button>
              <button className="btn">Add</button>
            </Item>
          </div>
        </Section_Certification>
        <Section_Projects>
          <hr />
          <Heading>Projects</Heading>
          <div className="row container-fluid">
            <Item>
              <input
                type="text"
                name="title"
                placeholder="Title"
                // value={}
              />
              <input
                type="text"
                name="link"
                placeholder="Project URL"
                // value={}
              />
              <textarea
                name="description"
                cols="30"
                rows="5"
                placeholder="Description"
                //  value={}
              ></textarea>
              <button className="btn btn">Remove</button>
            </Item>
            <button className="btn btn-dark">Add</button>
          </div>
        </Section_Projects>
      </Formm>
    </Form_Container>
  );
};

export default Form;
