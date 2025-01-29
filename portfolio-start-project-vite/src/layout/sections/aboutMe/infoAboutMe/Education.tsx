import {Profile} from "../Profile.tsx";
import {ListOfItems} from "../../../../components/ListOfItems.tsx";

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
            <Profile title={"Education"}></Profile>
            <ListOfItems data={educationData}/>
        </>

    )
}
