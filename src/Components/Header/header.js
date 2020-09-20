import React, { Component } from 'react';
import Logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css'


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    close(e) {
        this.setState({ show: !this.state.show });
    }
    render() {
        const styles = {
            paper: {
                background: "blue"
            }
        }
        return (
            // <Toolbar className="NavCont">
            <div className="NavCont">
                <Grid container>
                    <MenuIcon fontSize="large" style={{ paddingLeft:'3vh', color: '#fff', height:"7vh" }} onClick={this.close.bind(this)} />
                    <Drawer open={this.state.show} onClose={this.close.bind(this)} classeName={{ paper: styles.paper }}
                    >
                        <Link to={{ pathname: '/' }}>
                            <img className='logo' src={Logo} alt='Hogwarts' />
                        </Link>
                        {/* </Grid> */}
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                            <div className='navLinks'>
                                <Link to={{ pathname: '/houses' }}>
                                    <Button color="inherit" className='Btn'><span className='BtnText'>Houses</span></Button>
                                </Link>
                                <Link to={{ pathname: '/students' }}>
                                    <Button color="inherit" className='Btn'><span className='BtnText'>Characters</span></Button>
                                </Link>

                                <Link to={{ pathname: '/spellbook' }}>
                                    <Button color="inherit" className='Btn'><span className='BtnText'>Spell Book</span></Button>
                                </Link>
                                <Link to={{ pathname: '/spells' }}>
                                    <Button color="inherit" className='Btn'><span className='BtnText'>Spells</span></Button>
                                </Link>
                                <Link to={{ pathname: '/sort' }}>
                                    <Button color="inherit" className='Btn'><span className='BtnText'>Your House</span></Button>
                                </Link>
                            </div>
                        </Grid>
                    </Drawer>
                </Grid>
            </div>
        );
    };
}
// export default Header;

