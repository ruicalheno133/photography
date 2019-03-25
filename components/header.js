import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => (
    <nav className="navbar main-nav navbar-expand-md fixed-top">

        <span className="navbar-text"><a href="/">Rui Calheno</a></span>

        <button type="button" className="btn btn-default btn-sm navbar-toggler ml-auto" data-toggle="collapse" data-target="#menu">
            Menu
        </button>


        <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a className="nav-link" href="/">Photography</a>
        </li>
        <li className="nav-item ">
            <a className="nav-link" href="/about">About me</a>
        </li>
        </ul>
        </div>
    </nav>
)

export default Header