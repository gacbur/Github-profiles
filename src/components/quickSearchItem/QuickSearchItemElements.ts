import styled from 'styled-components'

export const SearchItem = styled.div`
    cursor:pointer;
    display: flex;
    align-items: center;
    color: #24292e;
    padding: .4em .6em;
    transition: .2s;

    &:hover{
        background-color: rgba(0,0,0,.1);
    }
    
    img{
        width:50px;
        height:50px;
        border-radius:100%;
    }

    h4{
        font-size: 15px;
        margin-left:.8em;
    }
`