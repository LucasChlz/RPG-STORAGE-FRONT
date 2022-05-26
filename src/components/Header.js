import '../styles/header.css';

const Header = () => {
    return (
        <div className='container'>
            <header>
                <div className='logo'>WORLD LIBRARY</div>
                <div className='list'>
                    <ul>
                        <li><a href="">Sign In</a></li>
                        <li><a href="">Sign Up</a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;