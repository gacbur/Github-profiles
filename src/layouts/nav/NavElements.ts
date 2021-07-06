import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navbar = styled.div`
    display: flex;
    align-items: center;
    padding:0em 3em;
    background-color: ${props => props.theme.navColor};
`

export const NavBarContentWrapper = styled.div`
    display: flex;
    width:100%;
`

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color:#cdd9e5;
    padding: 1em 2em;
    text-decoration: none;
    transition: .3s;
    
    h1{
        font-size: 23px;
    }

    i{
        display: flex;
        font-size: 26px;
        margin-left: .3em;
    }

    &:hover{
        color: rgba(255,255,255,0.7)
    }
`

export const ToggleDarkLight = styled.button`
    cursor:pointer;
    background-color: transparent;
    border:none;
    margin-left: auto;

    .icon{
        color:#cdd9e5;
        font-size: 28px;
        transition: .3s;

        &:hover{
        color: rgba(255,255,255,0.7)
        }
    }
`