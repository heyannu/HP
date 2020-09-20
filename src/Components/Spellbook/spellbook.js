import React, { useState, Component } from 'react';
import { spellData } from '../../api/api'
import Header from '../Header/header.js'
import FlipPage from "react-flip-page"
import notes from '../../Assets/Images/note.png'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import giphy from '../../Assets/Images/giphy.gif'
import ViewListIcon from '@material-ui/icons/ViewList';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
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
                        width="500"
                        height="500"
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
                                        <p>It is a "{single.type}" <br />that {single.effect}</p>
                                    </Grid>
                                </Grid>
                            </article>
                        )) : null}
                        <article>
                            <p>Last Page</p>
                        </article>
                    </FlipPage>
                </div >
                <div className="notspells">
                    {(data.length) ?
                        <Grid container id="spellcont">
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} id="leftpage">
                                <ArrowLeftIcon onClick={() => {
                                    this.setState({
                                        num: this.state.num - 1
                                    })
                                }} />
                                <p id="titlespell">{data[num].spell}</p>
                            </Grid>
                            <Grid item lg={6} xl={6} md={6} sm={6} xs={12} id="rightpage">
                                <ArrowRightIcon style={{ float: 'right' }} onClick={() => {
                                    this.setState({
                                        num: this.state.num + 1
                                    })
                                }} />
                                <p id="paraspell">It is a "{data[num].type}" <br />that {data[num].effect}</p>
                            </Grid>
                        </Grid>
                        : null}
                </div>
                <div className="minispells">
                    {(data.length) ?
                        <Grid container id="spellcont">
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} id="lft">
                                <ArrowLeftIcon onClick={() => {
                                    this.setState({
                                        num: this.state.num - 1
                                    })
                                }} />
                                <ArrowRightIcon style={{ float: 'right' }} onClick={() => {
                                    this.setState({
                                        num: this.state.num + 1
                                    })
                                }} />
                                
                                <p>{data[num].spell}</p>
                                <p style={{marginTop:'3vh', fontSize:'3.5vh', fontFamily:'AquilineTwo'}}>It is a "{data[num].type}" <br />that {data[num].effect}</p>
                            </Grid>
                        </Grid>
                        : null}
                </div>
            </div >
        );
    };
}

