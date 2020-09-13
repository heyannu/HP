import React, { Component } from 'react';
import hp from '../../Assets/hp.mp3'
import Header from '../Header/header.js'
import './landing.css'
import Button from '@material-ui/core/Button';
import Particles from 'react-particles-js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactAudioPlayer from 'react-audio-player';
export default class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            play: true,
            open: false,
            ok:false
        }
    }

    componentDidMount() {
        this.setState({ open: true })
    }
    click(){
        this.setState({ open: false, ok: true })
    }
    render() {
        return (
            <div className="magic">
                <Header />
                <ReactAudioPlayer
                    src={hp}
                    style={{ display: "none" }}
                    autoPlay={true}
                    controls
                />
                <Particles
                    params={{

                        particles: {
                            number: {
                                value: 600,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: "#ffffff"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                                image: {
                                    src: "img/github.svg",
                                    width: 100,
                                    height: 100
                                }
                            },
                            opacity: {
                                value: 0.8,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 40,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: false,
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 3,
                                direction: "bottom",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "grab"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 70,
                                    line_linked: {
                                        opacity: 1
                                    }
                                },
                                repulse: {
                                    distance: 100
                                }
                            }
                        },
                        retina_detect: true,
                        config_demo: {
                            hide_card: false,
                            background_color: "#b61924",
                            background_image: "",
                            background_position: "50% 50%",
                            background_repeat: "no-repeat",
                            background_size: "cover"
                        }

                    }}
                >
                    <h1>Hello Potterheads!</h1>

                </Particles>
                <Dialog
                    open={this.state.open}
                    onClose={!this.state.open}>
                    <DialogTitle className="head">
                        <p>Dear Witches and Wizards!</p>
                        <h1>Welcome to Hogwarts</h1>
                    </DialogTitle>
                    <DialogActions>
                        <Button className="yes" onClick={this.click.bind(this)}>Let's Go</Button>
                    </DialogActions>
                </Dialog>

            </div>
        )
    }
}


