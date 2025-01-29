import styled from "styled-components";
import photo from "../../../assets/images/Photo.webp";

interface SquareProps {
    $rotation: number;
}

export const Main = () => {
    return (
        <MainStyled>
            <DescriptionStyled>
                <TitleStyle>Hi 👋,<br/>My name is<br/>
                    <NameStyled>Pavlo MG</NameStyled>
                    <br/>I'm web developer
                </TitleStyle>
            </DescriptionStyled>
            <PhotoBorder>
                <Square $rotation={0}/>
                <Square $rotation={30}/>
                <Square $rotation={60}/>
                <Square $rotation={90}/>
                <Square $rotation={120}/>
                <Photo src={photo} alt=""/>
            </PhotoBorder>
        </MainStyled>
    )
}

const Photo = styled.img`
    max-width: 350px;
    max-height: 350px;
    border-radius: 50%;
    object-fit: cover;
    background: ${({theme}) => theme.gradient.photoGradient};
    padding: 10px;
    z-index: 1;

`

const TitleStyle = styled.span`
    color: #42446E`

const NameStyled = styled.span`
    background: ${({theme}) => theme.gradient.nameGradient};
    -webkit-background-clip: text;
    color: transparent;
`

const DescriptionStyled = styled.div`
    color: #42446E;
    font-family: 'Poppins', sans-serif;
    font-size: 2.625rem;
    font-weight: 700;`

const PhotoBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 627px;
    max-height: 627px;
`

const Square = styled.div<SquareProps>`
    max-width: 444px;
    max-height: 444px;
    position: absolute;
    background: transparent;
    transform: rotate(${props => props.$rotation}deg);
    border: 2px solid transparent;
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
