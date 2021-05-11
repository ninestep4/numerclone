import React, { Component } from 'react'
import Navitems from './NavItem'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    activeitem = (item) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': item }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        }) 
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitems item="Home" tolink="/" activenav={this.activeitem}></Navitems>
                    <Navitems item="Bisection" tolink="/Bisection" activenav={this.activeitem}></Navitems>
                    <Navitems item="False-Position" tolink="/False" activenav={this.activeitem}></Navitems>
                    {/* <Navitems item="Interoplation" tolink="/Inter" activenav={this.activeitem}></Navitems>
                    <Navitems item="Regression" tolink="/Reg" activenav={this.activeitem}></Navitems> */}
                    <Navitems item="Newton-raphson" tolink="/Newtonrap" activenav={this.activeitem}></Navitems>
                    <Navitems item="Onepoint" tolink="/Onepoint" activenav={this.activeitem}></Navitems>
                    
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar;