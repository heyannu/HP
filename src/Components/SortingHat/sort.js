import React, { useState, Component } from 'react';
import { sortingHat } from '../../api/api'
import { TextField, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Swal from 'sweetalert2'
import './sort.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import huff from '../../Assets/Images/huff.gif'
import gryff from '../../Assets/Images/gryff.gif'
import slyth from '../../Assets/Images/slyth.gif'
import raven from '../../Assets/Images/raven.gif'
import Header from '../../Components/Header/header.js'
const gif = [gryff, raven, slyth, huff]
export default class SortingHat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            name: ""
        }
    }
    async componentDidMount() {

        AOS.init({
            duration: 2000
        })

        const sortingHatData = await sortingHat()
        this.setState({ data: sortingHatData.data })
        console.log(this.state.data)
    }
    name(e) {
        this.setState({
            name: e.target.value
        })
    }
    async again() {
        const sortingHatData = await sortingHat()
        this.setState({ data: sortingHatData.data })
        console.log(this.state.data)
    }
    submit(e) {
        if (this.state.name == "") {
            Swal.fire('Please enter your name');
        }
        else {
            var url = '';
            if (this.state.data == 'Ravenclaw') {
                url = gif[1]
            }
            else if (this.state.data == 'Slytherin') {
                url = gif[2]
            }
            else if (this.state.data == 'Gryffindor') {
                url = gif[0]
            }
            else {
                url = gif[3]
            }
            Swal.fire({
                title: 'Congratulations! ' + this.state.name,
                text: 'You belong to ' + this.state.data,
                imageUrl: url,
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: this.state.data,
                showDenyButton: true,
                confirmButtonText: 'Yaay!',
                denyButtonText: 'I want to try Again!'
            })
                .then((result) => {
                    if (result.isDenied) {
                        this.again()
                    }
                })

        }
    }
    render() {
        return (
            <div className="cover">
                <Header />
                <div className="sort">
                    <Grid container className="layer">
                        <Grid item lg={6}>
                            <p class="line-1 anim-typewriter">Would you like to Know which house you belong to?</p>
                            <div className='field' data-aos="fade-right" data-aos-delay="150">
                                <TextField id="standard-basic" label="Name" onChange={this.name.bind(this)} variant='filled' />
                                <Button variant='contained' className="button" onClick={this.submit.bind(this)}>Go</Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

        );
    };
}

