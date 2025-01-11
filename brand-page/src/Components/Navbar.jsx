import '../App.css'
function NavBar(){
    return(
        <div >
            <nav >
                <div>
                    <img src='/images/brand_logo.png' />
                </div>
                <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
                </ul>

                <button>Login</button>
            </nav>
        </div>
    )
}

export default NavBar;