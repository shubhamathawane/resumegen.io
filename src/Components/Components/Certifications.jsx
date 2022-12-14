import { Today } from '@mui/icons-material';
import React from 'react'
import { Certification, Course, Description, Heading, HR, Institution, RowTable, Year } from '../../Styles/RightContentStyles'

const Certifications = ({data, color}) => {
    const certificates = data.certifications;
    console.log(certificates)
  return (
    <Certification>
        <Heading>Certifications</Heading>
        <HR/>
        {certificates.map((item, index) => (
            <RowTable>
                <div className="left-column">
                    {item.year && (
                        <Year>
                            <Today style={{height: "15px"}}/>
                            {item.year}
                        </Year>
                    )}
                </div>
                <div className="right-coloumn">
                    <Course>{item.course}</Course>
                    <Institution>{item.institution}</Institution>
                    <Description>{item.description}</Description>
                </div>
            </RowTable>
        ))}
    </Certification>
  )
}

export default Certifications