const Header = (props) => {
    return (<header style={{textAlign:"center",
     backgroundColor:"blueviolet",
     color:"#ffffff"}}>
        {props.text}
    </header>)
}

export default Header;