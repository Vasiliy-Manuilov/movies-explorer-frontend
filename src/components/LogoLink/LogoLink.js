import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import "./LogoLink.css"

export function LogoLink() {
    return <Link to='/'>
        <img
            alt='Логотип Movies Explorer'
            className='logo'
            src={logo}
        />
    </Link>
}
