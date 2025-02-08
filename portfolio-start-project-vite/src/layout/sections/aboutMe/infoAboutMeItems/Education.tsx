import {ListOfItems} from "../../../../components/ListOfItems.tsx";
import {SectionTitles} from "../../../../components/sectionItems/SectionTitles.tsx";
import {educationData} from "./educationData.ts";


export const Education = () => {
    return (
        <>
            <SectionTitles >Education</SectionTitles>
            <ListOfItems data={educationData}/>
        </>

    )
}
