import styled from "styled-components";
import photo from "../../../assets/images/Photo.webp";
import {SectionTitles} from "../../../components/SectionTitles.tsx";
import { SectionsWrapper} from "../../../components/SectionsWrapper.tsx";
import {SquareProps} from "../../../types/styles/abstract/square.ts";
import {StyledSpan} from "../../../components/StyledSpan.tsx";
import {Container} from "../../../components/menu/Container.tsx";


export const Main = () => {
    return (
        <SectionsWrapper>
            <Container >
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

const Photo = styled.img`
    max-width: 350px;
    max-height: 350px;
    border-radius: 50%;
    object-fit: cover;
    background: ${({theme}) => theme.gradient.photoGradient};
    padding: 0.625rem;
    z-index: 1;

`

const PhotoBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 627px;
    max-height: 627px;
`

const Square = styled.div<SquareProps>`
    min-width: 444px;
    min-height: 444px;
    position: absolute;
    background: transparent;
    transform: rotate(${props => props.$rotation}deg);
    border: 1px solid transparent;
    border-radius: 10px; /* Если нужны скруглённые углы */
    border-image: ${({theme}) => theme.gradient.squareGradient} 1; /* Градиент для рамки */
    box-sizing: border-box;
`;

