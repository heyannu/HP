import React, { Component } from 'react';
import Header from '../Header/header.js'
import G from '../../Assets/Images/gryffindor.png'
import H from '../../Assets/Images/hufflepuff.png'
import R from '../../Assets/Images/ravenclaw.png'
import S from '../../Assets/Images/slytherin.png'
import giphy from '../../Assets/Images/giphy.gif'
import './house.css'
import { Dialog, DialogContent} from '@material-ui/core';
import { BrowserRouter as  Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { houseData } from '../../api/api'
import Grid from '@material-ui/core/Grid';
export default class House extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            open:true
        }
    }
    async componentDidMount() {
        const HouseData = await houseData()
        this.setState({ data: HouseData.data,
        open:false })
    }
    render() {
        const images = [G, R, S, H];
        const color = ['#BC1320', '#343487', '#1D7452', '#C06D28']
        const data = this.state.data;
        return (
            <div id="house">
                <Header />
                <Dialog
                    fullScreen
                    open={this.state.open}
                    PaperProps={{
                        style: {
                            backgroundColor: 'rgba(0, 0, 0, 0.534)',
                            boxShadow: 'none',
                        },
                    }}
                >
                    <DialogContent class="gif">
                        <img src={giphy} alt='Loading'/>
                    </DialogContent>
                </Dialog>
                <div className="main">
                    <Grid container>
                        {(data.length) ? data.map((single, key) => (
                            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                                <Card class="card right">
                                    <div class="face front" style={{ background: color[key] }}>
                                        <img src={images[key]} class="img" alt=''></img>
                                    </div>
                                    <div class="face back" style={{ background: color[key] }}>
                                        <div class="border">
                                            <p class="text">Founded by
                                            <span style={{ fontWeight: 'bold', fontSize: '1.5vh' }}>
                                                    <p class="header">{single.founder}</p>
                                                </span>
                                            </p>
                                            <p class="text"> Qualities of a true
                                            <span style={{ fontWeight: 'bold' }}>{single.name}</span>
                                            are " <span class="caps">{single.values[0]}, {single.values[1]}, {single.values[2]} ,& {single.values[3]}</span></p>
                                        </div>
                                        <Link to={{ pathname: '/house', state: { data: single, key: key } }}>
                                            <Button variant="contained" className="btn"><p>Know more</p></Button>
                                        </Link>
                                    </div>
                                </Card>
                            </Grid>
                        )) : null}
                    </Grid>
                </div>
            </div >
        );
    }
};