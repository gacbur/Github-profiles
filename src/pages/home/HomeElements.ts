import styled from 'styled-components'

export const HomePage = styled.div``

export const SearchFormWrapper = styled.div`
    margin-top:8em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.TextColorMain};

    h1{
        margin-bottom: 1.8em;
    }
`
export const SearchBar = styled.div`
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    position: relative;
    width:700px;
    height:50px;

    input{
        padding: 0em 0em 0em 1.5em;
        font-size: 15px;
        width:100% !important;
        height:48px;
        border:none;
        background-color: ${props => props.theme.elementsBackgroundColor};

        &:focus{
            outline:none;
        }

    }
`
export const QuickSearchResults = styled.div`
    box-shadow: 0 4px 7px rgba(0,0,0,0.3);
    position: absolute;
    width:700px;
    background-color: ${props => props.theme.elementsBackgroundColor};
    top:48px;
    left:0px;
    right:0px;
    margin-bottom: 5em;
    border-top:1px solid lightgray;
`

export const LoadingWrapper = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:2em 0em;
`


