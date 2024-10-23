import styled from "styled-components";

export const LeftWrapper = styled.div`
flex: 1;
color: ${props => props.theme.color.primaryColor};
display: flex;
align-items: center;

.logo {
    padding-left: 24px;
    cursor: pointer;
}
`
