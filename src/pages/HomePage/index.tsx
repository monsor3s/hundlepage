import * as React from 'react';


import { IconLookup, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { BackgroundDesk, Button, Container, Footer, H1, Logo, Mockups, Span } from './styles';
import backgroundDesk from '../../assets/bg-desktop.svg';
import logo from '../../assets/logo.svg';
import mockups from '../../assets/illustration-mockups.svg';

library.add( fab, faFacebookF, faTwitter, faInstagram )

const fbLookup: IconLookup = { prefix: 'fab', iconName: 'facebook-f' }
const ttLookup: IconLookup = { prefix: 'fab', iconName: 'twitter' }
const instLookup: IconLookup = { prefix: 'fab', iconName: 'instagram' }

export class HomePage extends React.Component {
    render() {
      return (
    <Container >
    <BackgroundDesk src={ backgroundDesk } alt="Fundo" />
    <Logo src={logo} alt="Logo header" />
    <Mockups src={mockups} alt="Imagem Mockups" />
    <H1 > Build The Community<br/> Your Fans Will Love </ H1>
    <Span >
      Huddle re-imagines the way we build communities. You have <br/> a voice, but so does your audience.
      Create connections with<br/> your users as you engage in genuine discussion.
    </Span> 
    <Button > Register </ Button> 
    <Footer > 
    <FontAwesomeIcon icon={fbLookup} className="fbLookup" />
    <FontAwesomeIcon icon={ttLookup} className="ttLookup" />
    <FontAwesomeIcon icon={instLookup} className="instLookup" />
    </Footer>
    </Container>

  );
}
}

export default HomePage;