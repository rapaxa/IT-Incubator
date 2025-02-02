import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/menu/Container.tsx";

export const Header = () => {
    return (
        <HeaderStyle>
            <Container>
                <Logo/>
                <Menu/>
            </Container>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    margin-top: 41px;
    width: 100%;
    height: 60px;
    max-height:59px ;
`;

