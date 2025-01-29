import {FlexWrapperStyled} from "../../../../components/FlexWrapper.tsx";
import {Profile} from "../Profile.tsx";

export const AboutMe = () => {
    return (
            <FlexWrapperStyled $flexD="column">
            <Profile title={"About Me"} description={"The Generator App is an online tool that helps you " +
                "to export ready-made templates ready to work as your future website" +
                ". It helps you to combine slides, panels and other components " +
                "and export it as a set of static files: HTML/CSS/JS."}>
            </Profile>
            </FlexWrapperStyled>
    )
}


