import photo from "../../../assets/images/Photo.webp";
import {SectionTitles} from "../../../components/sectionItems/SectionTitles.tsx";
import {SectionsWrapper} from "../../../components/sectionItems/SectionWrapper.tsx";
import {StyledSpan} from "../../../components/StyledSpan.tsx";
import {Container} from "../../../components/menu/Container.tsx";
import {Photo, PhotoBorder, Square} from "./Main.styled.ts";


export const Main = () => {
    return (
        <SectionsWrapper>
            <Container>
                <SectionTitles as="h1">Hi 👋,<br/>My name is<br/>
                    <StyledSpan>Pavlo MG</StyledSpan>
                    <br/>I'm web developer
                </SectionTitles>

                <PhotoBorder>
                    <Square $rotation={30}/>
                    <Square $rotation={45}/>
                    <Square $rotation={60}/>
                    <Square $rotation={75}/>
                    <Square $rotation={90}/>
                    <Photo src={photo} alt=""/>
                </PhotoBorder>
            </Container>
        </SectionsWrapper>
    )
}



