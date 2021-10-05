import styled from "styled-components";

export const StyledButton = styled.button`

    min-width: 150px;
    border: none;
    height: 30px;
    padding: 0 10px;
    background: ${(props) => props.color};
    color:white;
    cursor: pointer;
    filter: saturate(2.2);

    :hover {
        box-shadow: 0 0 2px 1px white;
    }

    :active {
        filter: grayscale(1);
    }


`