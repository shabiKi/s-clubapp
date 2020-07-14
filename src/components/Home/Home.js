import React from 'react';
import './Home.css';
import Ground from '../../assets/background/hero-1.jpg';
import News from './News';
import NextMatch from './Match update/Nextmatch';
import Ranking from './Ranking/Ranking';
import { Button } from 'reactstrap';

const Home = (props) => { 

    return (
        <div className="set-bg">
            <img src={Ground} alt="background"></img>
            <div className="h-container">
            <div><h4>15 June 2020 / 9:00 AM</h4></div>
                <div><h2>Tampere Sports Club VS Helsinki Sports Club</h2></div>
            </div>
            <div className="btn-reg"><Button color="success" onClick={() => { props.history.push('/Signup'); }}>Join Our Club</Button></div>
            <span> <News /> </span>
            <div> <NextMatch /> </div>
            <div> <Ranking /> </div>
        </div>
    );
}

export default Home;