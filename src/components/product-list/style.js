import styled from "styled-components";


export const Container = styled.div`

    border:1px solid gray;
    text-align: center;
    color: white;
    background: #332e83;
    max-width: 800px;
    margin: 20px auto;
    border-radius: 20px;
    padding: 8px;
    box-sizing: border-box;


`

export const List = styled.ul`

    list-style: none;   
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0;

    li {
        border: 1px dashed white;
        padding: 5px;
        min-width: 140px;
    }

`