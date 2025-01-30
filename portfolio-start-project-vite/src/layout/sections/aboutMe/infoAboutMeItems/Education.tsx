import {ListOfItems} from "../../../../components/ListOfItems.tsx";
import {SectionTitles} from "../../../../components/SectionTitles.tsx";

const educationData = [
    {
        title: "Bachelor in Electronics & Communication",
        company: "Bangalore Instutute of Technology",
        dates: "Aug 2015 - Dec 2020",
        type: "Full Time"
    }]
export const Education = () => {
    return (
        <>
            <SectionTitles >Education</SectionTitles>
            <ListOfItems data={educationData}/>
        </>

    )
}
