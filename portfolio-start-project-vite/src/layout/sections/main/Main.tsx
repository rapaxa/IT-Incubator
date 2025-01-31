import styled from "styled-components";
import photo from "../../../assets/images/Photo.webp";
import {SectionTitles} from "../../../components/SectionTitles.tsx";
import { SectionsWrapper} from "../../../components/Container.tsx";
import {SquareProps} from "../../../types/styles/abstract/square.ts";
import {StyledSpan} from "../../../components/StyledSpan.tsx";


export const Main = () => {
    return (
        <SectionsWrapper>
            <MainStyled>
                <SectionTitles as="h1">Hi 👋,<br/>My name is<br/>
                    <StyledSpan>Pavlo MG</StyledSpan>
                    <br/>I'm web developer
                </SectionTitles>
                <PhotoBorder>
                    <Square $rotation={10}/>
                    <Square $rotation={20}/>
                    <Square $rotation={30}/>
                    <Square $rotation={40}/>
                    <Square $rotation={50}/>
                    <Photo src={photo} alt=""/>
                </PhotoBorder>
            </MainStyled>
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
const MainStyled = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
