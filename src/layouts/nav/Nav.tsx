import React, { FC } from 'react'

import { FiGithub } from 'react-icons/fi'
import { FaMoon, FaSun } from 'react-icons/fa'

import { Navbar, NavLink, NavBarContentWrapper, ToggleDarkLight } from './NavElements'

type NavProps = {
    theme: string,
    toggleTheme: (() => void)
}

const Nav: FC<NavProps> = ({ theme, toggleTheme }) => {
    return (
        <Navbar>
            <NavBarContentWrapper>
                <NavLink to="/">
                    <h1>Github Profiles</h1>
                    <i><FiGithub /></i>
                </NavLink>
                <ToggleDarkLight
                    type='button'
                    onClick={() => toggleTheme()}
                >
                    {theme === 'light' ? <FaMoon className="icon" /> : <FaSun className="icon" />}
                </ToggleDarkLight>
            </NavBarContentWrapper>
        </Navbar>
    )
}

export default Nav
