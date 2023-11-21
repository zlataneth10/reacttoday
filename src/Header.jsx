//GOOD
//header.style.backgroundColor = 'red'
//header.style.borderRadius = '20px'

//BAD
//background-color:

//name export
//export function SideBar() {
//    return <div>sidebar</div>
//}

//export function SideBar1() {
//    return <div>sidebar</div>
//}

function Header() {
    return <header>
        <div className="logo">
            <h1>App</h1>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="#">home</a>
                </li>
                <li>
                    <a href="#">about</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li>
            </ul>
        </nav>
        <div>
            <a href="#">contact us</a>
        </div>
    </header>
}

export default Header;