import React from 'react';
import NavBar from '../components/NavBar.jsx';
import { Container } from 'reactstrap';
import UploadTools from '../components/UploadTools.jsx';

class Upload extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
                <Container>
                    <UploadTools />
                </Container>
            </div>
        )
        }
}
export default Upload;