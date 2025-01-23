import styled from "styled-components";
export const DashboardContainer = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 40px;
    padding-left: 20px;
    max-width: 100%;
    // width: 100%;
    background-color: ${(props) => props.theme.colors.light};
    font-family: ${(props) => props.theme.fonts.body};
`;

export const Title = styled.h1`
    font-size: 1.5rem;      
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.heading};
`;
