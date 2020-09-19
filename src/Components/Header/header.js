import React, { Component } from 'react';
import Logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './header.css'


export default class Header extends Component {
    render() {
        return (
            <Toolbar className="NavCont">
                <Grid container>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                        <Link to={{ pathname: '/' }}>
                            <img className='logo' src={Logo} alt='Hogwarts'/>
                        </Link>
                    </Grid>
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
                        {/* <div className='menu'><AccessAlarm fontSize='large'onClick={() => setShowMenuIcon(!showMenuIcon)} /></div> */}
                        {/* <div id="mySidenav" className="sidenav" style={!showMenuIcon ? { width: '0px' } : { width: '250px' }}>
                    <div className='menuClose'>
                        <ThreeDRotation fontSize='large' color='error' onClick={() => setShowMenuIcon(!showMenuIcon)} /></div>
                
                </div> */}
                    </Grid>
                </Grid>
            </Toolbar>
        );
    };
}
// export default Header;

