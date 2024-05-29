import React from "react";
import style from '../static/Header.module.css';    
import AnchorLink from "react-anchor-link-smooth-scroll";
function Header(){
    return (
        <div className ={style.container} id="navbar">
            <div className={style.navbar}>
                <div className={style.title} >Portfolio</div>
                <div className={style.pages}>
                    <nav className={style.navigations}>
                            <AnchorLink href="#home" className={style.Link}>Home</AnchorLink>
                            <AnchorLink href="#skills" className={style.Link}>Skills</AnchorLink>
                            <AnchorLink href='#project' className={style.Link}>Projects</AnchorLink>
                            
                            <AnchorLink href='#about' className={style.Link}> About</AnchorLink>
                            <AnchorLink href="#contact" className={style.Link}>Contact</AnchorLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;