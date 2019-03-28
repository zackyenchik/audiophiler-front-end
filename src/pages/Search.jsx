import React from 'react';
import NavBar from '../components/NavBar.jsx';
import styles from '../styles.css'
import {Container} from 'reactstrap';
import CSHPlug from '../components/CSHPlug.jsx';

class Search extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <Container>
                    <CSHPlug className={styles.CSHPlug}/>
                </Container>
            </div>
        )
    }
}
export default Search;