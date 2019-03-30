import React from 'react';
import NavBar from '../components/NavBar.jsx';
import styles from '../styles.css'
import {Container} from 'reactstrap';
import CSHPlug from '../components/CSHPlug.jsx';
import queryString from 'query-string';

class Search extends React.Component {

    componentDidMount() {
        const params = queryString.parse(this.props.location.search);
        console.log(params.q);
        // TODO: make API call to search db and create/store audio file components for results
    }

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