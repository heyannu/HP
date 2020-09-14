import React, { useState, Component } from 'react';
import Header from '../Header/header.js'
import './details.css'
import giphy from '../../Assets/Images/giphy.gif'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { houseData } from '../../api/api'
import Grid from '@material-ui/core/Grid';
import { ArrowBack } from '@material-ui/icons';
import Checkbox from '@material-ui/core/Checkbox';
import { Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from '@material-ui/core';

export default class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            id: 0, 
            open:true
        }
    }
    async componentDidMount() {
        this.setState({
            data: this.props.location.state,
            open:false
        })
    }
    render() {
        const data = this.props.location.state.details;
        const url = this.props.location.state.url;
        console.log(data)

        return (
            <div id="houses">
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

                <div id='top'>
                    <Grid container className="all">
                        <Grid item lg={4} className="pic">
                            <Link to={{ pathname: '/students' }}>
                                <ArrowBack style={{ color: '#fff' }} className="arrow" fontSize="large" />
                            </Link>
                            <img id='img2' src={url} />
                        </Grid>
                        <Grid item lg={8} className="data">
                            <h1 id='info'>
                                <span className='start'>Name  :- </span>
                                {!data.name ? "Data Unvailable" : data.name}
                                <br />
                                <span className='start'>House  :- </span>
                                {!data.house ? "Data Unvailable" : data.house}
                                <br />
                                <span className='start'>Species  :- </span>
                                {!data.species ? "Data Unvailable" : data.species}
                                <br />
                                <span className='start'>Role  :- </span>
                                {!data.role ? "Data Unvailable" : data.role}
                                <br />
                                <span className='start'>Blood Origin  :- </span>
                                {!data.bloodStatus ? "Data Unvailable" : data.bloodStatus}
                                <br />
                                <span className='start'>School  :- </span>
                                {!data.school ? "Data Unvailable" : data.school}
                                <br />
                                <span className='start'>Wand  :- </span>
                                {!data.wand ? "Data Unvailable" : data.wand}
                                <br />
                                <span className='start'>Boggart  :- </span>
                                {!data.boggart ? "Data Unvailable" : data.boggart}
                                <br />
                                <span className='start'>Alias  :-</span>
                                {!data.alias ? "Data Unvailable" : data.alias}
                                <br />
                                <span className='start'>Animagus  :- </span>
                                {!data.animagus ? "Data Unvailable" : data.animagus}
                                <Grid container>
                                    <Grid item lg={6} className="txt">
                                        <h4 class='names'>Death Eater
                                        {data.deathEater ?
                                                <CheckCircleIcon style={{ color: '#dabc37', marginLeft: '2vh' }}> </CheckCircleIcon> :
                                                <CancelIcon style={{ color: 'red', marginLeft: '2vh' }}></CancelIcon>}
                                        </h4>
                                    </Grid>
                                    <Grid item lg={6} className="txt">
                                        <h4 class='names'>Dumbledores Army
                                        {(data.dumbledoresArmy) ?
                                                <CheckCircleIcon style={{ color: '#dabc37', marginLeft: '2vh' }}> </CheckCircleIcon> :
                                                <CancelIcon style={{ color: 'red', marginLeft: '2vh' }}></CancelIcon>}
                                        </h4>
                                    </Grid>

                                    <Grid item lg={6} className="txt">
                                        <h4 class='names'>Ministry Of Magic
                                        {(data.ministryOfMagic) ?
                                                <CheckCircleIcon style={{ color: '#dabc37', marginLeft: '2vh' }}></CheckCircleIcon> :
                                                <CancelIcon style={{ color: 'red', marginLeft: '2vh' }}></CancelIcon>
                                            }
                                        </h4>
                                    </Grid>
                                    <Grid item lg={6} className="txt">
                                        <h4 class='names'>Order Of The Phoenix
                                        {(data.orderOfThePhoenix) ?
                                                <CheckCircleIcon style={{ color: '#dabc37', marginLeft: '2vh' }}> </CheckCircleIcon> :
                                                <CancelIcon style={{ color: 'red', marginLeft: '2vh' }}></CancelIcon>}
                                        </h4>
                                    </Grid>

                                </Grid>

                            </h1>
                        </Grid>
                    </Grid>
                </div>
            </div >
        )
    };
}