import styled from "styled-components";
import {FlexWrapperStyled} from "../../../../components/FlexWrapper.tsx";
import {Icon} from "../../../../components/icons/Icon.tsx";
import {TechStackItemPropsType} from "../../../../types/techStack.ts";


export const TechStackItems = ({dataItems}: { dataItems: TechStackItemPropsType[] }) => {
    return (
        <FlexWrapperStyled $alignI={"center"}>
            <StyledTechStackItems>
                {dataItems.map(({name, width, height, viewBox}, index) => (
                    <StyledTechStackItem key={index}>
                        <Icon iconId={name + "Svg"} width={width} height={height} viewBox={viewBox}/>
                    </StyledTechStackItem>
                ))}
            </StyledTechStackItems>
        </FlexWrapperStyled>

    );
};

const StyledTechStackItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 7.25rem;
    padding: 0;
`
const StyledTechStackItem = styled.li`
    display: flex;`
