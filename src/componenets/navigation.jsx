import "../App.css";
const Navigation = ()=>{
    return (
        <nav className="container">
            <div className="logo">
                <img src="/images/brand_logo.png" alt="logo" width="100" height="auto" />
            </div>
            <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>

            </ul>
            <button>login</button>
        </nav>
    );
};
export default Navigation;