import React, { Component } from 'react';
import { characterData } from '../../api/api'
import './characters.css';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/header.js';
import { Link } from 'react-router-dom'
import giphy from '../../Assets/Images/giphy.gif'
import { Dialog, DialogContent } from '@material-ui/core';

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
                open: false
            }, () => {
                for (var i in this.state.data) {
                    if (this.state.data[i].house === 'Hufflepuff') {
                        color = '#C06D2888';
                    }
                    else if (this.state.data[i].house === 'Gryffindor') {
                        color = '#BC132088';
                    }
                    else if (this.state.data[i].house === 'Slytherin') {
                        color = '#1D745288';
                    }
                    else if (this.state.data[i].house === 'Ravenclaw') {
                        color = '#34348788';
                    }
                    else if (this.state.data[i].house === undefined) {
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
            'https://vignette.wikia.nocookie.net/harrypotter/images/b/b2/Fenrir_Greyback.png/revision/latest/scale-to-width-down/292?cb=20090814213734',
            'https://vignette.wikia.nocookie.net/harrypotter/images/7/76/Gellert_Grindelwald_publicity_still.jpg/revision/latest?cb=20190713163752',
            'https://www.heraldweekly.com/wp-content/uploads/2019/06/103859/80.jpg',
            'https://vignette.wikia.nocookie.net/harrypotter/images/3/31/Founders_gryffindor1.jpg/revision/latest/top-crop/width/360/height/450?cb=20180611200439',
            'https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg',
            'https://vignette.wikia.nocookie.net/harrypotter/images/0/02/RolandaHooch.jpg/revision/latest?cb=20100616193052',
            'https://vignette.wikia.nocookie.net/harrypotter/images/1/16/Mafalda_Hopkirk_DH1.jpg/revision/latest/top-crop/width/360/height/450?cb=20140331134044',
            'https://vignette.wikia.nocookie.net/harrypotter/images/d/d6/PM_HelgaHufflepuff_Founders.jpg/revision/latest/top-crop/width/360/height/450?cb=20180611201502',
            'https://vignette.wikia.nocookie.net/harrypotter/images/2/24/GOF_promo_Angelina_Johnson.jpg/revision/latest/top-crop/width/360/height/450?cb=20100522214321',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/44/LeeJordan.jpg/revision/latest/top-crop/width/360/height/450?cb=20060702232708',
            'https://vignette.wikia.nocookie.net/harrypotter/images/5/5e/BerthaJorkins_PM.png/revision/latest/top-crop/width/360/height/450?cb=20171115165250',
            'https://vignette.wikia.nocookie.net/harrypotter/images/1/1b/Igor_Karkaroff_GoF.jpg/revision/latest?cb=20100724115703',
            'https://vignette.wikia.nocookie.net/harrypotter/images/9/93/Viktor_Krum_promo_Yule_Ball.png/revision/latest/top-crop/width/360/height/450?cb=20120207173113',
            'https://vignette.wikia.nocookie.net/heroes-villains/images/7/7f/Bellatrix_Strange.jpg/revision/latest/scale-to-width-down/340?cb=20140903194732',
            'https://photos1.iorbix.com/00/00/00/00/03/10/05/79/Rabastan-Lestrange-YenT1Xjp4-b.jpg',
            'https://vignette.wikia.nocookie.net/harryalbuspotter/images/5/52/Rodolphus.PNG/revision/latest/scale-to-width-down/340?cb=20120126112938',
            'https://vignette.wikia.nocookie.net/harrypotter/images/1/1a/Kenneth_Branagh_as_Gilderoy-Lockhart_%286%29.jpg/revision/latest?cb=20181009213748',
            'https://vignette.wikia.nocookie.net/harrypotter/images/c/c4/Order-of-the-phoenix-Alice.jpg/revision/latest/top-crop/width/360/height/450?cb=20160804032555',
            'https://vignette.wikia.nocookie.net/harrypotter/images/9/98/Order-of-the-phoenix-frank.jpg/revision/latest/top-crop/width/360/height/450?cb=20160804033445',
            'https://veritasseries.weebly.com/uploads/1/3/2/2/13227984/8821245.jpg',
            'https://i.pinimg.com/originals/3a/ac/11/3aac11fba3e3a24c36cc5da74f8ee3c7.png',
            'https://images.ctfassets.net/usf1vwtuqyxm/t6GVMDanqSKGOKaCWi8oi/74b6816d9f913623419b98048ec87d25/LunaLovegood_WB_F5_LunaLovegoodPromoCloseUp_Promo_080615_Port.jpg?fm=jpg',
            'https://vignette.wikia.nocookie.net/harrypotter/images/5/54/Xenophilius_Lovegood_Promo_Shot.jpg/revision/latest?cb=20160719193236',
            'https://i.pinimg.com/originals/dc/c5/12/dcc512b1aaff97c905228ee954c153ae.jpg',
            'https://vignette.wikia.nocookie.net/harrypotter/images/9/93/Walden_Macnair.jpg/revision/latest/top-crop/width/720/height/900?cb=20100610085110',
            'https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG',
            'https://vignette.wikia.nocookie.net/villains/images/a/ad/Lucius_Malfoy.jpg/revision/latest?cb=20110710180141',
            'https://vignette.wikia.nocookie.net/harrypotter/images/7/78/Narcissa_Malfoy.png/revision/latest?cb=20190111020523',
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/f/f9/Maxime_1.png/revision/latest/top-crop/width/720/height/900?cb=20190628213447',
            'https://vignette.wikia.nocookie.net/harrypotter/images/d/de/Ernie_GOF.jpg/revision/latest/top-crop/width/360/height/450?cb=20160720043852',
            'https://vignette.wikia.nocookie.net/harrypotter/images/f/f9/PromoHP1_Minerva_McGonagall_2.jpg/revision/latest/scale-to-width-down/340?cb=20150810173547',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/4d/MoodyProfile.png/revision/latest/top-crop/width/360/height/450?cb=20200418003242',
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/c/c2/Ollivander_ProfileClearer.gif/revision/latest?cb=20090524162239',
            'https://vignette.wikia.nocookie.net/harrypotter/images/8/81/Pansy_Parkinson_infobox.png/revision/latest?cb=20141024191624',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/45/PadmaPatil.png/revision/latest/top-crop/width/360/height/450?cb=20170118054329',
            'https://pm1.narvii.com/6099/a3115a30d113726a100f5775f8f5a7419666ff1c_00.jpg',
            'https://vignette.wikia.nocookie.net/harrypotter/images/e/e4/Pettigrew_DH1.jpg/revision/latest/top-crop/width/360/height/450?cb=20160531030113',
            none, none, none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/5/53/PinceProfile.png/revision/latest/top-crop/width/360/height/450?cb=20111128202842',
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/5/56/Madam_Pomfrey.png/revision/latest?cb=20131110073338',
            'https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914',
            'https://vignette.wikia.nocookie.net/qghficsimjkaeibhfztnpjrqiezhzuadzsjxwpnxusefbthfes/images/4/4c/Thebestmainimageofjamespotter.jpg/revision/latest/scale-to-width-down/340?cb=20130425214645',
            'https://vignette.wikia.nocookie.net/harrypotter/images/c/ce/Lily_Potter1.jpg/revision/latest/top-crop/width/720/height/900?cb=20140712171247',
            'https://vignette.wikia.nocookie.net/harrypotter/images/a/ad/ErniePrang.jpg/revision/latest?cb=20110829193804',
            'https://vignette.wikia.nocookie.net/harrypotter/images/e/e9/Quirinus_Quirrel.jpg/revision/latest?cb=20110806132643',
            'https://vignette.wikia.nocookie.net/harrypotter/images/a/a1/Helena_Ravenclaw.png/revision/latest/top-crop/width/360/height/450?cb=20090525100646',
            'https://vignette.wikia.nocookie.net/harrypotter/images/1/1c/PM_RowenaRavenclaw_Founders.jpg/revision/latest/top-crop/width/360/height/450?cb=20180611200720',
            none, none, none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/a/aa/Voldemort_Headshot_DHP1.png/revision/latest/top-crop/width/360/height/360?cb=20161203031453',
            'https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Demelza_robins.PNG/revision/latest?cb=20090711095409',
            'https://static.wikia.nocookie.net/cour-de-cassation/images/4/4a/B34CED2A-F6D7-473C-BD4A-C1A38CA340EB.jpeg/revision/latest?cb=20190721173445',
            'https://vignette.wikia.nocookie.net/harrypotter/images/3/32/Runcorn.jpg/revision/latest?cb=20111209185818',
            'https://vignette.wikia.nocookie.net/harrypotter/images/9/93/ScabiorDH2.png/revision/latest/top-crop/width/360/height/450?cb=20111211155132',
            'https://vignette.wikia.nocookie.net/harrypotter/images/3/36/Newton_Scamander_Profile_crop.png/revision/latest?cb=20190609204955',
            'https://cdn3.whatculture.com/images/2016/11/424b2920e1f27577-600x338.jpg',
            'https://elenasquareeyes.files.wordpress.com/2016/04/kingsley-shacklebolt.jpg',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/49/StanShunpike.jpg/revision/latest?cb=20090611131501',
            'https://vignette.wikia.nocookie.net/harrypotter/images/c/c6/Professorsinistra.jpg/revision/latest/top-crop/width/360/height/450?cb=20120115215231',
            'https://vignette.wikia.nocookie.net/harrypotter/images/3/38/Rita_skeeter_1.png/revision/latest/scale-to-width-down/340?cb=20100117232843',
            'https://vignette.wikia.nocookie.net/harrypotter/images/a/a1/Horace_Slughorn_%28HBP_promo%29_1-1.jpg/revision/latest/top-crop/width/360/height/450?cb=20100706114608',
            'https://vignette.wikia.nocookie.net/harrypotter/images/6/60/PM_SalazarSlytherin_Founders.jpg/revision/latest/top-crop/width/720/height/900?cb=20180611201037',
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/0/0c/WB_F5_Dumbledores_army_smith.jpg/revision/latest/top-crop/width/360/height/450?cb=20180215164827',
            'https://upload.wikimedia.org/wikipedia/en/b/b9/Ootp076.jpg',
            'https://vignette.wikia.nocookie.net/harrypotter/images/7/7a/Alicia_Spinnet.png/revision/latest?cb=20160720064800',
            'https://vignette.wikia.nocookie.net/harrypotter/images/7/7d/HP72-FP-00573.jpg/revision/latest/top-crop/width/360/height/450?cb=20170730031333',
            'https://vignette.wikia.nocookie.net/harrypotter/images/2/21/Pius_Thicknesse.png/revision/latest?cb=20170107192541',
            'https://vignette.wikia.nocookie.net/p__/images/4/4c/Dean-Thomas-OOTP.png/revision/latest/top-crop/width/360/height/450?cb=20200514231616&path-prefix=protagonist',
            none,
            'https://images.ctfassets.net/usf1vwtuqyxm/4RCmWhTVFSUk4CQGuYqIIm/e947cbf6cbae0ece4acc39622c6e913f/NymphadoraTonks_WB_F5_NympadoraTonksPromoShot_Promo_100615_Port.jpg?fm=jpg',
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/6/68/Order-of-the-phoenix-travers.jpg/revision/latest/top-crop/width/360/height/450?cb=20160708183149',
            'https://vignette.wikia.nocookie.net/harrypotter/images/5/55/Trelawney_ootp.jpg/revision/latest?cb=20170731050353',
            'https://qph.fs.quoracdn.net/main-qimg-3cde50491ad07049ddbb869fcfa70396',
            'https://vignette.wikia.nocookie.net/harrypotter/images/9/97/EmmelineVance1.jpg/revision/latest/scale-to-width-down/340?cb=20180524232516',
            'https://vignette.wikia.nocookie.net/harrypotter/images/1/1f/Romilda_Vane_profile.png/revision/latest?cb=20200403224739',
            'https://vignette.wikia.nocookie.net/harrypotter/images/8/86/Vikti.jpg/revision/latest/top-crop/width/360/height/450?cb=20170904135935',
            'https://upload.wikimedia.org/wikipedia/id/8/84/Arthur_Weasley.jpg',
            'https://vignette.wikia.nocookie.net/harrypotter/images/6/66/BillWeasleyDH2.png/revision/latest/top-crop/width/360/height/450?cb=20160212193938',
            none,
            'https://pm1.narvii.com/6580/3ab20f6cb2e51858a2c098b2f571da6cf9622117_00.jpg',
            'https://vignette.wikia.nocookie.net/harrypotterfanon/images/b/be/George_Weasley_II.jpg/revision/latest?cb=20160417155929',
            'https://vignette.wikia.nocookie.net/p__/images/8/83/Ginny_Molly_Weasley_Potter.jpg/revision/latest?cb=20170217121649&path-prefix=protagonist',
            'https://openpsychometrics.org/tests/characters/test-resources/pics/HP/11.jpg',
            'https://vignette.wikia.nocookie.net/harrypotterfanon/images/3/37/Percy_Weasley.PNG/revision/latest/top-crop/width/720/height/900?cb=20160316033935',
            'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg',
            'https://vignette.wikia.nocookie.net/harrypotter/images/1/1f/Wood.jpg/revision/latest/top-crop/width/720/height/900?cb=20180308030826',
            none, none, 'https://vignette.wikia.nocookie.net/harrypotter/images/5/59/Blaise_Zabini.png/revision/latest?cb=20170102051038',
            'https://vignette.wikia.nocookie.net/harrypotter/images/d/d2/Ara.jpg/revision/latest/top-crop/width/360/height/360?cb=20100611145604',
            none,
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/5/55/Bloody_Baron.jpg/revision/latest/top-crop/width/360/height/450?cb=20100408172210',
            'https://vignette.wikia.nocookie.net/warner-bros-entertainment/images/b/b8/Buckbeak_harry_potter_profile.png/revision/latest?cb=20200308142556',
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/f/ff/Crookshanks_FH.png/revision/latest?cb=20161118055031',
            'https://img.women.com/images/images/000/170/486/large/dobby_rambling_ever_on.jpg?1549000240',
            none, none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/e/ea/Fat_Friar_Profile.png/revision/latest/top-crop/width/360/height/450?cb=20160409230657',
            none,
            'https://i.pinimg.com/originals/47/83/1f/47831fab344b125235a1ea3b3b34e838.jpg',
            'https://vignette.wikia.nocookie.net/harrypotter/images/f/f8/Fawkes_WB_F2_FawkesCloseUpIllustration_Illust_100615_Port.jpg/revision/latest/top-crop/width/360/height/450?cb=20151218225509',
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/a/a3/Fluffy_HPCB.png/revision/latest?cb=20170204211603',
            'https://assets.mugglenet.com/wp-content/uploads/2020/03/Grawp.jpg',
            'https://vignette.wikia.nocookie.net/harrypotter/images/5/53/Griphook_TDH_SF.png/revision/latest/top-crop/width/720/height/900?cb=20161215062124',
            'https://vignette.wikia.nocookie.net/harrypotter/images/1/1e/Hedwig_Snowy_Owl_PM.png/revision/latest?cb=20161123234010',
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/a/a0/Krech.jpg/revision/latest/top-crop/width/360/height/450?cb=20100621114028',
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/b/b8/Myrtle_Warren_profile.png/revision/latest/top-crop/width/360/height/450?cb=20170113020338',
            'https://vignette.wikia.nocookie.net/harrypotter/images/f/f7/Mrs_Norris_PS.png/revision/latest/window-crop/width/200/x-offset/80/y-offset/0/window-width/1202/window-height/1201?cb=20170102070857',
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/7/70/Nagini_PM.png/revision/latest?cb=20161124073206',
            'https://vignette.wikia.nocookie.net/harrypotter/images/6/6d/Nicholas_de_Mimsy-Porpington.png/revision/latest/top-crop/width/360/height/450?cb=20200515191831',
            none,
            none,
            'https://vignette.wikia.nocookie.net/harrypotter/images/c/ce/Pigwidgeon.jpg/revision/latest?cb=20161123054507',
            'https://vignette.wikia.nocookie.net/harrypotter/images/4/4d/Madamrosmertiee.PNG/revision/latest/top-crop/width/360/height/450?cb=20091026122124',
            none,
            none,
            none
        ]
        const id = this.state.id;
        console.log(data
            .length);
        return (
            <div className="character">
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
                        <img src={giphy} alt="Loading" />
                    </DialogContent>
                </Dialog>
                <Grid container className="seconddiv" spacing={3}>
                    {(data.length) ? data.map((single, key) => (
                        <Grid item xl={3} lg={3} md={4} sm={6} xs={12} className="col">
                            <Link to={{ pathname: '/details', state: { details: single, url: img[key] } }}>
                                <div className="studentcont" style={{ backgroundColor: id[key] }} >
                                    <div>
                                        <h1 className="student"><br />{single.name}</h1>
                                    </div>
                                    <div>
                                        <img src={img[key]} className="propic" alt={single.name}></img>
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
