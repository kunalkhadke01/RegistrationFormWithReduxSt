const Header = (props) => {
    return (<header style={{textAlign:"center",
     backgroundColor:"blueviolet",
     color:"#ffffff",
     padding:"20px"}}>
        {props.text}
    </header>)
}

export default Header;