import React from 'react';
import NavBar from '../components/NavBar.jsx';
import {Container, Row, Col} from 'reactstrap';
import styles from '../styles.css'
import CSHPlug from '../components/CSHPlug.jsx';
import AudioFile from '../components/AudioFile.jsx';

class Home extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <Container>
                    <CSHPlug className={styles.CSHPlug}/>
                    <Row className="justify-content-center">
                        <Col sm={{size: 'auto'}}><AudioFile name="USSR Anthem" owner="Tachanka" upload_date="Thurs, 28 Mar 2019" audio_source="https://audiophiler.csh.rit.edu/get_file_url/1692d7b50c5472433f2859497dd6a939" harold_state={false}></AudioFile></Col>
                        <Col sm={{size: 'auto'}}><AudioFile name="USSR Anthem" owner="Tachanka" upload_date="Thurs, 28 Mar 2019" audio_source="https://audiophiler.csh.rit.edu/get_file_url/1692d7b50c5472433f2859497dd6a939" harold_state={true}></AudioFile></Col>
                        <Col sm={{size: 'auto'}}><AudioFile name="USSR Anthem" owner="Tachanka" upload_date="Thurs, 28 Mar 2019" audio_source="https://audiophiler.csh.rit.edu/get_file_url/1692d7b50c5472433f2859497dd6a939" harold_state={false}></AudioFile></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Home;