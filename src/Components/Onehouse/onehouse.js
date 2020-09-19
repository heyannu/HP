import React, { Component } from 'react';
import Header from '../Header/header.js'
import G from '../../Assets/Images/gryffindor.png'
import H from '../../Assets/Images/hufflepuff.png'
import R from '../../Assets/Images/ravenclaw.png'
import S from '../../Assets/Images/slytherin.png'
import GMascot from '../../Assets/Images/Gmascot.png'
import RMascot from '../../Assets/Images/Rmascot.png'
import HMascot from '../../Assets/Images/Hmascot.png'
import SMascot from '../../Assets/Images/Rmascot.png'
import Minerva from '../../Assets/Images/minerva.png'
import Nick from '../../Assets/Images/nick.png'
import Pomona from '../../Assets/Images/popoma.jpg'
import filius from '../../Assets/Images/filius.png'
import graylady from '../../Assets/Images/graylady.png'
import fatfriar from '../../Assets/Images/fatfriar.png'
import snape from '../../Assets/Images/snape.jpg'
import baron from '../../Assets/Images/Baron.jpg'
import './onehouse.css'
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { ArrowBack } from '@material-ui/icons';

export default class OneHouse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            id: 0
        }
    }
    async componentDidMount() {
        this.setState({
            data: this.props.location.state.data,
            id: this.props.location.state.key
        })
    }
    render() {
        const images = [G, R, S, H];
        const color = ['#BC1320', '#343487', '#1D7452', '#C06D28']
        const data = this.props.location.state.data;
        var Gr = [];
        var col = [];
        const id = this.state.id;
        if (id === 0) {
            Gr = [Minerva, Nick, GMascot];
            col = ['#BC1320', '#FEE71A'];
        }
        else if (id === 1) {
            Gr = [filius, graylady, RMascot];
            col = ['#343487', '#893C03']
        }
        else if (id === 2) {
            Gr = [snape, baron, SMascot]
            col = ['#1D7452', '#BCBDBE']
        }
        else if (id === 3) {
            Gr = [Pomona, fatfriar, HMascot]
            col = ['#C06D28', '#000']
        }
        return (
            <div id="onehouse">
                <Header />
                <div className="onehouse">
                    {(data) ?
                        <Grid container spacing={3}>
                            <Grid item xl={4} lg={4} md={4} sm={6} xs={6}  >
                                <Link to={{ pathname: '/houses' }}>
                                    <ArrowBack style={{ color: '#fff' }} className="arrow" fontSize="large" />
                                </Link>
                                <Card class="card1">
                                    <div class="face one" style={{ background: color[id] }}>
                                        <img src={images[id]} class="img1" alt={data.name}></img>
                                    </div>
                                </Card>
                                <div class="colors">
                                    <div class="color" style={{ background: col[1] }} ></div>
                                    <div class="color" style={{ background: col[0] }}></div>
                                </div>
                            </Grid>
                            <Grid item lg={8}>
                                <div class="info">
                                    <Grid item xl={4} lg={4} md={4} sm={6} xs={6} >
                                        <div class="left">
                                            <div class="pos">
                                                <img src={Gr[0]} class="pic" alt={this.state.data.headOfHouse}/>
                                            </div>
                                            <div>
                                                < h4 class="spellsize">{this.state.data.headOfHouse}<br></br> is the House Head</h4>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xl={4} lg={4} md={4} sm={6} xs={6} >
                                        <div class="left">
                                            <div class="pos">
                                                <img src={Gr[1]} class="pic" alt={this.state.data.houseGhost}/>
                                            </div>
                                            <div>
                                                < h4 class="spellsize">{this.state.data.houseGhost}<br></br> is the House Ghost</h4>
                                            </div>

                                        </div>
                                    </Grid>
                                    <Grid item xl={4} lg={4} md={4} sm={6} xs={6} >
                                        <div class="left">
                                            <div class="pos">
                                                <img src={Gr[2]} class="pic" alt={this.state.data.mascot} />
                                            </div>
                                            <div>
                                                < h4 class="spellsize"><span style={{ textTransform: 'capitalize' }}>{this.state.data.mascot} <br></br></span> is the House Mascot</h4>
                                            </div>
                                        </div>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                        : null}
                </div>
            </div >
        )
    };
}