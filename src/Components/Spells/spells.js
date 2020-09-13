import React, { useState, Component } from 'react';
import { spellData } from '../../api/api'
import Header from '../Header/header.js'
import FlipPage from "react-flip-page"
import notes from '../../Assets/Images/note.png'
import Grid from '@material-ui/core/Grid';
import giphy from '../../Assets/Images/giphy.gif'
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
        this.setState({ data: spells.data,
        open:false });
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
        const Spells = [
            "https://www.youtube.com/watch?v=x8mGxGwbXmc",
            "https://www.youtube.com/watch?v=S9GpgKi6yL8",
        ]
        const data = this.state.data;
        console.log(data)
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
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
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
                                    <Grid item lg={6} id="title">
                                        <h1>{single.spell}</h1>
                                        <Grid item lg={10} id='th4'>
                                            <p>{key}</p>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={6} id="para">
                                        <p>It is a {single.type} that {single.effect}</p>
                                    </Grid>
                                </Grid>
                            </article>
                        )) : null}
                        <article>
                            <p>Nil</p>
                        </article>
                    </FlipPage>
                </div >
            </div>
        );
    };
}