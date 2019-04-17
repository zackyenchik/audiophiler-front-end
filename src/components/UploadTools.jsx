import React from 'react';
import Dropzone from 'react-dropzone';
import { 
    Table,
    Card,
    CardBody,
    Button,
    Form } from 'reactstrap';

class UploadTools extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            files: []
        }

        this.onDrop = this.onDrop.bind(this);
        this.renderUploadFiles = this.renderUploadFiles.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
    }

    onDrop = (acceptedFile) => {
        this.setState({
            files: this.state.files.concat(acceptedFile)
        })
    }

    renderUploadFiles() {
        let table = this.state.files.map((file) => (
            <tr key="file">
                <td>{file.name}</td>
                <td>{file.size}</td>
                <td>{file.type}</td>
            </tr>
        ))
        return table
    }

    uploadFiles() {
        fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            headers: {
                "Content-Type": "audio"
            },
            body: this.state.files,
            mode: "no-cors"
        }).then(
            response => response.json()
        ).then(
            success => console.log(success)
        ).catch(
            error => console.log(error)
        );
        this.setState({
            files: []
        });
    }

    render() {
        return (
            <div>
                <Card className="my-3" color="primary" outline>
                    <CardBody>
                        <Dropzone onDrop={this.onDrop} multiple accept="audio/mp3, audio/wav, audio/mp4, audio/flac, audio/webm, audio/ogg, audio/m4a, audio/aac">
                            {({getRootProps, getInputProps}) => (
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    Click here to prepare a file for upload.
                                </div>
                            )}
                        </Dropzone>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Filename</th>
                                    <th>Size</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderUploadFiles()}
                            </tbody>
                        </Table>
                        <Form id="upload" inline action="/upload" method="POST">
                            <Button color="primary" onClick={this.uploadFiles}>Upload</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
export default UploadTools;