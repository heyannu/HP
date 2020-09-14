import React, { useState, Component } from 'react';
import { spellData } from '../../api/api'
import Header from '../Header/header.js'
import FlipPage from "react-flip-page"
import notes from '../../Assets/Images/note.png'
import Grid from '@material-ui/core/Grid';
import giphy from '../../Assets/Images/giphy.gif'
import ViewListIcon from '@material-ui/icons/ViewList';
import { Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from '@material-ui/core';
// import m1 from '../../Assets/Images/wand/m1.png'
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
    useEffect() {
        const [flipPageWidth, setFlipPageWidth] = useState("");
        if (window.innerWidth > 1450) {
            setFlipPageWidth("500");
        } else {
            setFlipPageWidth("200");
        }
        console.log(flipPageWidth)
    };
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
                            <img src={giphy} />
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
                                <Grid item lg={3}>
                                    <li>{single.spell}</li>
                                </Grid>
                                <Grid item lg={3} >
                                    <li>{single.type}</li>
                                </Grid>
                                <Grid item lg={6}>
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