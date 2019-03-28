import React from 'react';
import {Container} from 'reactstrap';
import NavBar from '../components/NavBar.jsx';
import styles from '../styles.css'
import CSHPlug from '../components/CSHPlug.jsx';

class Mine extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container>
                    <CSHPlug className={styles.CSHPlug}/>
                </Container>
            </div>
        )
    }
}
export default Mine;