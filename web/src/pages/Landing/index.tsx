import React from 'react';
import { Link } from 'react-router-dom';

import { Landing_page, Container } from './style';

import Logo from '../../images/Logo.svg';

import Landing_img from '../../images/landing.svg';

const Landing = ()=>{
    return(
      <>
       <Landing_page>
           <Container>
              <img className="landing" src={Landing_img} alt="background" />
              <div className="landing--left">
                    <div className="landing--logo">
                        <img src={Logo} alt="Happy" />
                    </div>
                    <div className="landing--text">
                        <h1>Leve felicidade para o mundo</h1>
                        <p>Visite orfanatos e mude o dia de muitas crianças</p>
                    </div>
              </div>
              <div className="landing--right">
                  <div className="landing--location">
                      <strong>Quixeramobim</strong>
                      <p>Ceará</p>
                  </div>
                  <div className="featured--button">
                        <Link to="/app"><i className="material-icons">arrow_forward</i></Link>
                  </div>
              </div>
           </Container>
       </Landing_page>     
      </>
    )
}

export default Landing;