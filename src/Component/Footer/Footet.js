import Media from './Media';
import './footer.css'

const Footer = () => {

    return (
    <footer>
        <div className="container">
            <div className="paren-footer">
                <div className='Copywrit'>
                    <p>&copy; 2023 <span>AbdellahGou</span>. All rights reserved.</p>
                </div>
                <Media/>
            </div>
        </div>
    </footer>
    )
}


export default Footer;