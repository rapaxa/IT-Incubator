import styled from "styled-components";
export const SectionTitles = styled.h2`
  ${({ theme }) => {
    const { fonts: { title: { family, size, weight, height, align, color } } } = theme;

    return `
      font-family: ${family};
      font-size: ${size || '42px'};
      font-weight: ${weight || 700};
      line-height: ${height || '52px'};
      text-align: ${align || 'left'};
      color: ${color || '#42446E'};
    `;
}}
`;
