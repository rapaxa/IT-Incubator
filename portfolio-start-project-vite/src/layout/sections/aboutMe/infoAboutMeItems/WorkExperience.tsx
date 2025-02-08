import {ListOfItems} from "../../../../components/ListOfItems.tsx";
import {SectionTitles} from "../../../../components/sectionItems/SectionTitles.tsx";
import styled from "styled-components";

const jobData = [
    {
        title: "Junior Web Developer",
        company: "Dr. Rajkumar’s Learning App",
        location: "Bengaluru",
        dates: "Sep 2021 - Dec 2021",
        type: "Full Time"
    },
    {
        title: "Web Development Intern",
        company: "IonPixelz Web Solutions",
        location: "Bengaluru",
        dates: "Sep 2021 - Dec 2021",
        type: "Internship"
    },
    {
        title: "SEO / SEM Specialist",
        company: "HAAPS",
        location: "Bengaluru",
        dates: "Sep 2021 - Dec 2021",
        type: "Internship"
    }
];

export const WorkExperience = () => {
    return (
        <WrapperWorkExperience>
            <SectionTitles>Work Experience</SectionTitles>
            <ListOfItems data={jobData}/>
        </WrapperWorkExperience>

    )
}
const WrapperWorkExperience = styled.div`
`
