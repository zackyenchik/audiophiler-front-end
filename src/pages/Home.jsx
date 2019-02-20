import React from 'react';
import NavBar from '../components/NavBar.jsx';
import {Container} from 'reactstrap';
import CSHPlug from '../components/CSHPlug.jsx';

class Home extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <Container>
                    <CSHPlug />
                </Container>
            </div>
        )
    }
}
export default Home;