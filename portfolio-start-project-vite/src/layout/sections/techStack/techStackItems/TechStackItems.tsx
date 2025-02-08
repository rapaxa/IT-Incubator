import {FlexWrapperStyled} from "../../../../components/FlexWrapper.tsx";
import {Icon} from "../../../../components/icons/Icon.tsx";
import {TechStackItemPropsType} from "../../../../types/techStack.ts";
import {StyledTechStackItem, StyledTechStackItems} from "./TechStackItems.styled.tsx";


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

