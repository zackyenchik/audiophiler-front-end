import React from 'react';
import NavBar from '../components/NavBar.jsx';
import {Container} from 'reactstrap';
import CSHPlug from '../components/CSHPlug.jsx';
import styles from '../styles.css';

class Search extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <Container>
                    <CSHPlug className={styles.CSHPlug} />
                </Container>
            </div>
        )
    }
}
export default Search;