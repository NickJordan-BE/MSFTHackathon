import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import "./NavBar.css"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const burgerRef = useRef(null);

    const toggleMenu = () => {
        console.log(isOpen);
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                navRef.current
                && !navRef.current.contains(event.target)
                && burgerRef.current
                && !burgerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        const handleResize = () => {
            setIsOpen(false);
        }

        document.addEventListener("mousedown", handleOutsideClick);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            const timeoutId = setTimeout(() => {
            document.body.style.overflow = 'auto';
            }, 300);

            return () => clearTimeout(timeoutId);
        }
    }, [isOpen]);


    return (

        <nav className='navbar'>
            <div id='nav-links' ref={navRef} className={isOpen ? 'active' : ''}>
                <div id='link-container'>
                     <Link path="/">hecs0eci</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar