import {SectionTitles} from "../../../components/SectionTitles.tsx";
import {Container} from "../../../App.tsx";
import {TechStackItems} from "./techStackItems/TechStackItems.tsx";
import {FlexWrapperStyled} from "../../../components/FlexWrapper.tsx";


const dataItems = [
    {
        name: "html",
        width: "92",
        height: "105",
        viewBox: "0 0 92 105",
    },
    {
        name: "css",
        width: "92",
        height: "105",
        viewBox: "0 0 92 105",
    },
    {
        name: "js",
        width: "105",
        height: "105",
        viewBox: "0 0 105 105",
    }
    ,
    {
        name: "react",
        width: "110",
        height: "100",
        viewBox: "0 0 110 100",
    },
    {
        name:"redux",
        width:"104",
        height:"100",
        viewBox:"0 0 104 100",
    },
    {
        name:"bootstrap",
        width:"92",
        height:"105",
        viewBox:"0 0 92 105",
    },
    {
        name:"vsCode",
        width:"92",
        height:"105",
        viewBox:"0 0 92 105",
    },

    {
        name:"vsCode",
        width:"92",
        height:"105",
        viewBox:"0 0 92 105",
    },
    {
        name:"vsCode",
        width:"92",
        height:"105",
        viewBox:"0 0 92 105",
    },
    {
        name:"tailwind",
        width:"115",
        height:"69",
        viewBox:"0 0 115 69",
    },
    {
        name:"men",
        width:"92",
        height:"105",
        viewBox:"0 0 92 105",
    },
    {
        name:"gitHub",
        width:"92",
        height:"105",
        viewBox:"0 0 92 105",
    },


];

export const TechStack = () => {
    return (
        <Container $justify="space-evenly" >
            <FlexWrapperStyled $flexD={"column"} >
            <SectionTitles >My Tech Stack</SectionTitles>
            <span> Technologies I’ve been working with recently</span>
            </FlexWrapperStyled>
            <TechStackItems dataItems={dataItems}/>
        </Container>
    );
};


