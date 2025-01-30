import styled from "styled-components";
import {FlexWrapperStyled} from "../../../../components/FlexWrapper.tsx";
import {Icon} from "../../../../components/icons/Icon.tsx";

type TechStackItemPropsType = {
    name: string,
    width: string | "92",
    height: string | "105",
    viewBox: string | "0 0 92 105",
}
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
    gap: 116px;
    padding: 0;
`
const StyledTechStackItem = styled.li`
    display: flex;`
