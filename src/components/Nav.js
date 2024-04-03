import { Link } from 'react-router-dom';

const Nav = ({ clickHandler, toggler, domNode }) => {


    return (
        <div className="Nav"  >
            <span className="navHeading"><Link to='/'>Charitha Jayabahu..</Link></span>
            <div className="links nav" ref={domNode} >
                <div className="menuIcon bx bx-menu nav" onClick={clickHandler} ></div>
                <div className={`navLinks nav ${toggler} `} >
                    <Link className={` nav  homeLink `} to='/' >Home</Link>
                    <Link className={` nav homeLink `} to='/about'>About</Link>
                    <Link className={` nav homeLink `} to='/skills'>Skills</Link>
                    <Link className={` nav homeLink `} to='contact'>Contact</Link>
                </div>

            </div>

        </div>
    );
}

export default Nav;