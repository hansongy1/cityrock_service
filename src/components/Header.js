import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import '../styles/main.css';

import Logo from "../assets/city-logo.png";
import MenuBar from '../assets/fi-sr-menu-burger.png';
import CloseIcon from '../assets/icon_close.png';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);  
    };

    return React.createElement(
        'header',
        { className: 'App-header' },
        React.createElement(
            'section',
            { className: 'App-menu', onClick: toggleMenu },
            React.createElement('img', { src: MenuBar, alt: 'Menu Bar' })
        ),
        React.createElement(
            'section',
            { className: 'App-logo' },
            React.createElement('img', { src: Logo, alt: 'Logo' })
        ),
        React.createElement(
            'nav',
            { className: `side-menu ${isMenuOpen ? 'open' : ''}` },
            React.createElement('img', {
                src: CloseIcon,
                alt: 'close-icon',
                className: 'close-icon',
                onClick: toggleMenu
            }),
            React.createElement(
                'ul',
                null,
                React.createElement(
                    'li',
                    null,
                    React.createElement(Link, { to: '/' }, '홈')
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(Link, { to: '/' }, '공연')
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(Link, { to: '/' }, '전시')
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(Link, { to: '/festival' }, '축제')
                ), // 수정된 부분
                React.createElement(
                    'li',
                    null,
                    React.createElement(Link, { to: '/' }, 'AI 프로필')
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(Link, { to: '/' }, 'AR 카메라')
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(Link, { to: '/' }, '마이페이지')
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(Link, { to: '/login' }, '로그인(임시)')
                ) // 이 부분이 추가되었습니다.
            )
        ),
        isMenuOpen && React.createElement('div', {
            className: 'side-menu-overlay',
            onClick: toggleMenu
        })
    );
}

export default Header;
