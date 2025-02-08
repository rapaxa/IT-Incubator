import styled from "styled-components";

export const SectionTitles = styled.h2`
    ${({theme}) => {
        const {fonts: {title: {family, size, weight, height, align, color}}} = theme;

        return `
      font-family: ${family};
      font-size: ${size || '2.625rem'};
      font-weight: ${weight || 700};
      line-height: ${height || '3.25rem'};
      text-align: ${align || 'left'};
      color: ${color || '#42446E'};
      margin:  38px 0;
       @media ${theme.media.tablet} {
       text-align: center;
       }
    `;
    }}
`;
