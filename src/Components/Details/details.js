import React, { Component } from 'react';
import Header from '../Header/header.js'
import './details.css'
import giphy from '../../Assets/Images/giphy.gif'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { ArrowBack } from '@material-ui/icons';
import { Dialog, DialogContent } from '@material-ui/core';

export default class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            id: 0,
            open: true
        }
    }
    async componentDidMount() {
        this.setState({
            data: this.props.location.state,
            open: false
        })
    }
    render() {
        const data = this.props.location.state.details;
        const url = this.props.location.state.url;

        return (
            <div id="details">
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
                        <img src={giphy} alt='Loading...' />
                    </DialogContent>
                </Dialog>

                <div id='top'>
                    <Grid container className="all">
                        <Grid item xl={4} lg={4} md={5} sm={5} xs={12} className="pic">
                            <Link to={{ pathname: '/characters' }}>
                                <ArrowBack style={{ color: '#fff' }} className="arrow1" fontSize="large" />
                            </Link>
                            <img id='img2' src={url} alt={data.name} />
                        </Grid>
                        <Grid item lg={8} lg={8} md={7} sm={7} xs={12} className="data">
                            <h1 id="info">
                                {!data.name ? null :
                                    <span>Name  :- <span className='start'> {data.name} </span></span>
                                }
                                </h1>
                                <h1 id="info">{!data.house ? null :
                                    <span>House  :- <span className='start'> {data.house} </span></span>
                                }
                                </h1>
                                <h1 id="info">{!data.species ? null :
                                    <span>Species  :- <span className='start'> {data.species} </span></span>
                                }
                                </h1>
                                <h1 id="info">
                                {!data.role ? null : 
                                <span>Role  :- <span className='start'> {data.role}</span></span>
                                }
                                </h1>
                                <h1 id="info">
                                {!data.bloodStatus ? null : 
                                <span>Blood Origin  :- <span className='start'> {data.bloodStatus}</span></span>
                                }
                                </h1>
                                <h1 id="info">
                                {!data.school ? null : 
                                <span>School  :- <span className='start'> {data.school}</span></span>
                                }
                                </h1>
                                <h1 id="info">
                                {!data.wand ? null : 
                                <span>Wand  :- <span className='start'> {data.wand}</span></span>
                                }
                                </h1>
                                <h1 id="info">
                                {!data.boggart ? null : 
                                <span>Boggart  :- <span className='start'> {data.boggart}</span></span>
                                }
                                </h1>
                                <h1 id="info">
                                {!data.alias ? null : 
                                <span>Alias  :- <span className='start'> {data.alias}</span></span>
                                }
                                </h1>
                                <h1 id="info">
                                {!data.animagus ? null : 
                                <span className='start'>Animagus  :- <span className='start'> {data.animagus}</span></span>
                                }
                                </h1>
                                <h1 id="info">
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