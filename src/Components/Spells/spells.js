import React, { Component } from 'react';
import { spellData } from '../../api/api'
import Header from '../Header/header.js'
import Grid from '@material-ui/core/Grid';
import giphy from '../../Assets/Images/giphy.gif'
import { Dialog, DialogContent} from '@material-ui/core';
import './spells.css'
export default class Spells extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            open: true
        }
    }
    async componentDidMount() {
        const spells = await spellData()
        this.setState({
            data: spells.data,
            open: false
        });
    }
    render() {
        const data = this.state.data;
        return (
            <div><Header />
                <div className="container_box">
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
                            <img src={giphy} alt="loading"/>
                        </DialogContent>
                    </Dialog>
                    <div class="container_li">
                        <Grid container>
                            <Grid item lg={3}><h4 class="spellsize">SPELL</h4></Grid>
                            <Grid item lg={3}><h4 class="spellsize">TYPE</h4></Grid>
                            <Grid item lg={6}><h4 class="spellsize">EFFECT</h4></Grid>
                        </Grid>
                        {(data.length) ? data.map((single, key) => (
                            <Grid container className="li">
                                <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                                    <li>{single.spell}</li>
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                                    <li>{single.type}</li>
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <li>{single.effect}</li>
                                </Grid>
                            </Grid>
                        )) : null}

                    </div >
                </div>
            </div>
        );
    };
}