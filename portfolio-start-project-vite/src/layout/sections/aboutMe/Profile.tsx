import {SectionTitles} from "../../../components/SectionTitles.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
import styled from "styled-components";

type AboutMePropsType = {
    title: string,
    description?: string,
}

export const Profile = ({title, description}: AboutMePropsType) => {
    return (
        <StyledProfile>
            <SectionTitles>{title}</SectionTitles>
            <SectionText>{description}</SectionText>
        </StyledProfile>
    )
}
const StyledProfile = styled.div`
`
