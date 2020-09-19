import React, { useState, Component } from 'react';
import { spellData } from '../../api/api'
import Header from '../Header/header.js'
import FlipPage from "react-flip-page"
import notes from '../../Assets/Images/note.png'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import giphy from '../../Assets/Images/giphy.gif'
import ViewListIcon from '@material-ui/icons/ViewList';
import { Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from '@material-ui/core';
// import m1 from '../../Assets/Images/wand/m1.png'
import './spellbook.css'
import { ThreeDRotationSharp } from '@material-ui/icons';
export default class Spellbook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            open: true,
            num: 0
        }
    }
    async componentDidMount() {
        const spells = await spellData()
        console.log(spells)
        this.setState({
            data: spells.data,
            open: false
        });
    }
    inc() {
        this.setState({
            num: this.state.num + 1
        })
        console.log()
    }
    dec() {

        this.setState({
            num: this.state.num - 1
        })
    }
    render() {
        const data = this.state.data;
        const num = this.state.num;
        return (
            <div className="container">
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
                        <img src={giphy} />
                    </DialogContent>
                </Dialog>
                <div className='spells'>
                    <FlipPage
                        uncutPages="true"
                        // showSwipeHint="true"
                        pageBackground={notes}
                        className="flip"
                        width="450"
                        height="450"
                        orientation="horizantal"
                    >
                        {(data.length) ? data.map((single, key) => (
                            <article>
                                <Grid container className="grid">
                                    <Grid item xl={6} lg={6} id="title">
                                        <h1>{single.spell}</h1>
                                        <Grid item lg={10} id='th4'>
                                            <p>{key + 1}</p>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={6} xl={6} id="para">
                                        <p>It is a {single.type} <br />that {single.effect}</p>
                                    </Grid>
                                </Grid>
                            </article>
                        )) : null}
                        <article>
                            <p>Last Page</p>
                        </article>
                    </FlipPage>
                </div >
                {(data.length) ?
                    <div className="notspells">
                        <div className="magicspells">
                            <Grid container>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                                    <Grid container id="title1">
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} id='one'>
                                            <h1>{data[num].spell}</h1>

                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} id="two">
                                            <p>It is a {data[num].type} <br />that {data[num].effect}</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <div className="btnss">
                                <div className="btnleft">
                                    <Button variant="contained"  onClick={() => this.setState({ num: this.state.num - 1 })}>Next</Button>
                                </div>
                                <div className="btnright">
                                    <Button variant="contained"  onClick={() => this.setState({ num: this.state.num - 1 })}>Next</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}

                {(data.length) ?
                    <div className="minispells">
                        <div className="minimagicspells">
                            <Grid container>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                                    <Grid container id="title2">
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} id='one'>
                                            <h1>{data[num].spell}</h1>

                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} id="two">
                                            <p>It is a {data[num].type} <br />that {data[num].effect}</p>

                                        </Grid>
                                    </Grid>
                                    <div className="btnss">
                                        <div>
                                            <Button variant="contained" style={{ background: 'rgba(235, 209, 172,0.8)', color: '#000' }} onClick={() => this.setState({ num: this.state.num - 1 })}>Next</Button>
                                        </div>
                                        <div>
                                            <Button variant="contained" style={{ background: 'rgba(235, 209, 172,0.8)', color: '#000' }} onClick={() => this.setState({ num: this.state.num - 1 })}>Next</Button>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    : null}
            </div>
        );
    };
}

