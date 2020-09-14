import React, { useState, Component } from 'react';
import { characterData } from '../../api/api'
import './characters.css';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/header.js';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import giphy from '../../Assets/Images/giphy.gif'
import { Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from '@material-ui/core';

export default class Character extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            color: 'rgba(255, 255, 255, 0.4)',
            id: [],
            open: true
        }
    }
    async componentDidMount() {
        const CharacterData = await characterData();
        var color = '';
        this.setState(
            {
                data: CharacterData.data,
                open:false
            }, () => {
                for (var i in this.state.data) {
                    if (this.state.data[i].house == 'Hufflepuff') {
                        color = '#C06D2888';
                    }
                    else if (this.state.data[i].house == 'Gryffindor') {
                        color = '#BC132088';
                    }
                    else if (this.state.data[i].house == 'Slytherin') {
                        color = '#1D745288';
                    }
                    else if (this.state.data[i].house == 'Ravenclaw') {
                        color = '#34348788';
                    }
                    else if (this.state.data[i].house == undefined) {
                        color = '#580c2d'
                    }
                    this.state.id.push(color)
                    this.setState({
                        id: this.state.id
                    })
                }
            })
    }
    render() {
        const data = this.state.data;
        var none = 'https://www.iconfinder.com/data/icons/delivery-and-logistic/64/Not_found_the_recipient-no_found-person-user-search-searching-4-512.png';
        const img = ['https://vignette.wikia.nocookie.net/harrypotter/images/b/b7/Harry-potter-goblet-of-fire-hannah.jpg/revision/latest/scale-to-width-down/350?cb=20170731215859',
            'https://vignette.wikia.nocookie.net/harryalbuspotter/images/a/a5/Babbling.JPG/revision/latest/scale-to-width-down/340?cb=20111218123202',
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/0/0d/Bathilda_Bagshot_profile.jpg/revision/latest?cb=20161119223158',
            'https://vignette.wikia.nocookie.net/harrypotter/images/3/32/Katie_Bell_infobox.jpg/revision/latest/scale-to-width-down/316?cb=20170118053940',
            'https://vignette.wikia.nocookie.net/harrypotter/images/9/93/PhineasNBlack.jpg/revision/latest?cb=20110619011730',
            none,
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/b/bc/OOTP_promo_front_closeup_Sirius_Black.jpg/revision/latest/scale-to-width-down/335?cb=20150918055024',
            'https://vignette.wikia.nocookie.net/harrypotter/images/3/33/Amelia_Bones.jpg/revision/latest/scale-to-width-down/350?cb=20100528134913',
            'https://vignette.wikia.nocookie.net/harrypotter/images/7/77/Susan01.png/revision/latest?cb=20150107120752',
            none, 'https://vignette.wikia.nocookie.net/harrypotter/images/8/8e/LavenderBrown_WB_F6_LavenderCrying_Promo_080615_Port.jpg/revision/latest/scale-to-width-down/333?cb=20180203062638',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/48/Millicent_Bulstrode_2.jpg/revision/latest?cb=20141228194856',
            'https://vignette.wikia.nocookie.net/harrypotter/images/d/d4/Frankbryce2.jpg/revision/latest/scale-to-width-down/350?cb=20090505171455',
            'https://vignette.wikia.nocookie.net/harrypotter/images/9/93/CharityBurbage.png/revision/latest/scale-to-width-down/350?cb=20111218233337',
            'https://vignette.wikia.nocookie.net/harrypotter/images/2/25/Alecto-DH2.jpg/revision/latest/scale-to-width-down/350?cb=20170203010927',
            'https://vignette.wikia.nocookie.net/harrypotter/images/9/97/Amycus_Carrow_PM.png/revision/latest/scale-to-width-down/350?cb=20170203044409',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/43/ReginaldCattermole.jpg/revision/latest/scale-to-width-down/343?cb=20140331134403',
            'https://vignette.wikia.nocookie.net/harrypotter/images/c/c2/Mary_Cattermole_2.jpg/revision/latest?cb=20160814111720',
            'https://vignette.wikia.nocookie.net/harrypotter/images/1/1e/Cho_Chang.jpg/revision/latest/scale-to-width-down/342?cb=20180322164130',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/4b/Pepe4.jpg/revision/latest?cb=20160830005853',
            'https://vignette.wikia.nocookie.net/harrypotter/images/f/f5/Michael_1995.jpg/revision/latest/scale-to-width-down/350?cb=20160804031238',
            'https://vignette.wikia.nocookie.net/harrypotter/images/c/cc/Crabbesnr.PNG/revision/latest/scale-to-width-down/350?cb=20200418010245',
            'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/48/Colin_Creevey.jpg/revision/latest/scale-to-width-down/340?cb=20140604193056',
            'https://vignette.wikia.nocookie.net/harryalbuspotter/images/c/c0/DennisCreevey.PNG/revision/latest?cb=20120105185323',
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/1/15/Roger_Lloyd_Pack_as_Barty_Crouch_Snr_%28GoF-promo-02%29.jpg/revision/latest/scale-to-width-down/350?cb=20100123214858',
            'https://vignette.wikia.nocookie.net/harrypotter/images/f/f4/Barty_Crouch_Junior.jpg/revision/latest/scale-to-width-down/319?cb=20161221034115',
            'https://vignette.wikia.nocookie.net/harrypotter/images/d/d0/ZGCSrgUsPgs.jpg/revision/latest/scale-to-width-down/350?cb=20141229163810',
            'https://vignette.wikia.nocookie.net/harrypotter/images/1/1e/Fleur_Delacour.jpg/revision/latest/scale-to-width-down/350?cb=20161119222230',
            'https://vignette.wikia.nocookie.net/harrypotter/images/d/d0/Gabrielle_Delacour.jpg/revision/latest/scale-to-width-down/350?cb=20100720153724',
            'https://vignette.wikia.nocookie.net/harrypotter/images/e/e4/Dedalus_Diggle.jpg/revision/latest/scale-to-width-down/264?cb=20110703233114',
            'https://vignette.wikia.nocookie.net/harrypotter/images/b/bc/Harry-potter-caliz-fuego-promo-40.jpg/revision/latest/scale-to-width-down/350?cb=20140619033809',
            'https://vignette.wikia.nocookie.net/harrypotter/images/9/90/Cedric_Diggory_Profile.png/revision/latest/scale-to-width-down/350?cb=20161123045136',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/4e/Elphias_Doge_2.jpg/revision/latest/scale-to-width-down/350?cb=20110610163841',
            'https://vignette.wikia.nocookie.net/harrypotter/images/7/74/Dolohov-0.jpg/revision/latest/scale-to-width-down/350?cb=20181228122546',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/40/Aberforth_Dumbledore.jpg/revision/latest?cb=20170911160033',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/40/Albus_Dumbledore_%28HBP_promo%29_3.jpg/revision/latest/scale-to-width-down/350?cb=20150822232849',
            'https://vignette.wikia.nocookie.net/harrypotter/images/0/0e/Ariana_Dumbledore_Hog%27s_Head.jpg/revision/latest/scale-to-width-down/350?cb=20120108013927',
            'https://vignette.wikia.nocookie.net/harrypotter/images/1/19/Dudley_DH.png/revision/latest?cb=20200413050209',
            'https://vignette.wikia.nocookie.net/harrypotter/images/7/7e/Marjorie_dursley_promo.jpg/revision/latest/scale-to-width-down/350?cb=20141106101744',
            'https://vignette.wikia.nocookie.net/harrypotter/images/6/64/Petunia_DH1.png/revision/latest/scale-to-width-down/350?cb=20200413045426',
            'https://vignette.wikia.nocookie.net/harrypotter/images/2/20/Vernon_Dursley.jpg/revision/latest/scale-to-width-down/350?cb=20160121162004',
            none, none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/8/82/Figg.jpg/revision/latest?cb=20080102062404',
            'https://vignette.wikia.nocookie.net/harrypotter/images/c/c8/Mainfulcd.jpg/revision/latest/scale-to-width-down/302?cb=20200413210532',
            'https://vignette.wikia.nocookie.net/harrypotter/images/1/16/Justin_Finch-Fletchley_%28McGonagall%27s_Class%29_%281%29.png/revision/latest?cb=20180308172742',
            'https://vignette.wikia.nocookie.net/p__/images/b/bc/Seamus_op1.jpg/revision/latest?cb=20170904171323&path-prefix=protagonist',
            'https://vignette.wikia.nocookie.net/harrypotter/images/8/80/Monmarcus.jpg/revision/latest/scale-to-width-down/330?cb=20100327164729',
            none, 'https://vignette.wikia.nocookie.net/harrypotter/images/e/e0/Fletcher_DH1.jpg/revision/latest?cb=20160714162019',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/4b/Flitwickarmourbattle.png/revision/latest/scale-to-width-down/345?cb=20110628141204',
            'https://vignette.wikia.nocookie.net/harrypotter/images/6/6d/Corneliushogwarts.jpg/revision/latest/scale-to-width-down/350?cb=20100312184011',
            none, none, none, none, none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/e/e7/Gregory_Goyle_DH2.jpg/revision/latest/scale-to-width-down/350?cb=20180306163743',
            'https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg',
            'https://vignette.wikia.nocookie.net/harrypotter/images/e/ee/Mykew_Gregorovitch.jpg/revision/latest/scale-to-width-down/350?cb=20161119161206',
            'https://vignette.wikia.nocookie.net/harrypotter/images/b/b2/Fenrir_Greyback.png/revision/latest/scale-to-width-down/292?cb=20090814213734'
        ]
        const id = this.state.id;
        console.log(id[0], id[[1]])

        return (
            <div className="up">
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
                <Grid container className="seconddiv">
                    {(data.length) ? data.map((single, key) => (
                        <Grid item lg={3} className="col">
                            <Link to={{ pathname: '/details', state: { details: single, url: img[key] } }}>
                                <div className="studentcont"style={{ backgroundColor:id[key] }} >
                                    <div>
                                        <h1 className="student"><br />{single.name}</h1>
                                    </div>
                                    <div>
                                        <img src={img[key]} className="propic"></img>
                                    </div>
                                </div>
                            </Link>
                        </Grid>
                    )) : null}
                </Grid>
            </div >
        );
    };
}
