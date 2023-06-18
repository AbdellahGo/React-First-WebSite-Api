import Logo from "./Logo";
import Links from "./Links";
import './header.css'

const Header = () => {

    return (
    <header>
        <div className="container">
            <div className="paren-header">
                <Logo/>
                <Links/>
            </div>
        </div>
    </header>
    )
}


export default Header;