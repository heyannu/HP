import React, { useState, Component } from 'react';
import { characterData } from '../../api/api'
import Grid from '@material-ui/core/Grid';

export default class Character extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    async componentDidMount() {
        const CharacterData = await characterData()
        this.setState({ data: CharacterData })
        console.log(this.state.data)
    }

    // colors: (2) ["scarlet", "gold"]
    // founder: "Goderic Gryffindor"
    // headOfHouse: "Minerva McGonagall"
    // houseGhost: "Nearly Headless Nick"
    // mascot: "lion"
    // members: (40) ["5a0fa648ae5bc100213c2332", "5a0fa67dae5bc100213c2333", "5a0fa7dcae5bc100213c2338", "5a107e1ae0686c0021283b19", "5a10944f3dc2080021cd8755", "5a10947c3dc2080021cd8756", "5a1096b33dc2080021cd8762", "5a1097653dc2080021cd8763", "5a1098fd3dc2080021cd876e", "5a109af13dc2080021cd877a", "5a109bfc3dc2080021cd877f", "5a109c3d3dc2080021cd8780", "5a109cb83dc2080021cd8784", "5a109cd33dc2080021cd8785", "5a109e143dc2080021cd878d", "5a109e1e3dc2080021cd878e", "5a109e253dc2080021cd878f", "5a109e543dc2080021cd8790", "5a109f053dc2080021cd8793", "5a1226520f5ae10021650d76", "5a1226d70f5ae10021650d77", "5a12292a0f5ae10021650d7e", "5a12298d0f5ae10021650d7f", "5a1229e10f5ae10021650d80", "5a122cbe0f5ae10021650d89", "5a1233ff0f5ae10021650d98", "5a1234cb0f5ae10021650d9b", "5a1237480f5ae10021650da3", "5a1237c00f5ae10021650da5", "5a1238070f5ae10021650da6", "5a1238350f5ae10021650da7", "5a12387a0f5ae10021650da8", "5a1238b20f5ae10021650da9", "5a1239130f5ae10021650daa", "5a12393d0f5ae10021650dab", "5a12395f0f5ae10021650dac", "5a1239c80f5ae10021650dad", "5a1239f10f5ae10021650dae", "5a123b450f5ae10021650db7", "5a123f130f5ae10021650dcc"]
    // name: "Gryffindor"
    // school: "Hogwarts School of Witchcraft and Wizardry"
    // values: (4) ["courage", "bravery", "nerve", "chivalry"]
    // __v: 0
    // _id: "5a05e2b252f721a3cf2ea33f"
    // __proto__: Object

    // const [showMenuIcon, setShowMenuIcon] = useState(false)
    render() {
        return (
            <div>
               <p>check console</p>
            </div>
        );
    };
}
// export default Header;

