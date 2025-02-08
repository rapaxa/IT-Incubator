import {SectionTitles} from "../../../components/sectionItems/SectionTitles.tsx";
import {TechStackItems} from "./techStackItems/TechStackItems.tsx";
import {SectionsWrapper} from "../../../components/sectionItems/SectionWrapper.tsx";
import {SectionSpan} from "../../../components/sectionItems/SectionSpan.tsx";
import {Container} from "../../../components/menu/Container.tsx";
import {dataItems} from "./techStackData.ts";




export const TechStack = () => {
    return (
        <SectionsWrapper>
            <Container direction={'column'}>
                <SectionTitles>My Tech Stack</SectionTitles>
                <SectionSpan> Technologies I’ve been working with recently</SectionSpan>
                <TechStackItems dataItems={dataItems}/>
            </Container>
        </SectionsWrapper>
    );
};



