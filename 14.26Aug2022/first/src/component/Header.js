import './Header.css'
const Header=({title})=>{
    return(
        <header>
            <h1 style={headingStyle}>Hello {title}</h1>
            {/* <h2 className="h2Head">H2 Heading</h2>
            <h3 id="h3Head">H3 Heading</h3> */}
            <button className="btn">Click</button>
        </header>
    );
};

const headingStyle={
    color:'darkcyan',
    backgroundColor:"yellow",
    textAlign:"center",
}

Header.defaultProps={
    title: "Task Tracker",
};
export default Header;