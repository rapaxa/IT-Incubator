import styled from "styled-components";

export const SectionText = styled.p`
     ${({ theme }) => {
    const { fonts: { description: { family, size, color ,height} } } = theme;
        return `
          font-family: ${family};  
          font-size: ${size};
          color: ${color || '#42446E'};
          line-height: ${height};
        `
    }}
`
