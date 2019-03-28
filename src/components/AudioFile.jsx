import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardSubtitle,
    FormGroup,
    Label,
    Input } from 'reactstrap';

class AudioFile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.name,
            owner: props.owner,
            upload_date: props.upload_date,
            audio_source: props.audio_source,
            harold_state: props.harold_state
        }

        this.handleHaroldToggle = this.handleHaroldToggle.bind(this);
    }

    handleHaroldToggle() {
        // TODO: make API call to toggle harold status
        this.setState(prevState => ({
            harold_toggle: !prevState.harold_toggle
        }));
    }

    render() {
        return(
            <Card className="my-3" color="primary" outline>
            <CardHeader className="bg-primary"/>
                <CardBody>
                    <CardTitle>{this.state.name}</CardTitle>
                    <CardSubtitle>Owner: {this.state.owner} uploaded on {this.state.upload_date}</CardSubtitle>
                    <audio controls className="my-3">
                        <source src={this.state.audio_source} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={this.state.harold_state} onChange={() => this.handleHaroldToggle(this.state)}/>{' '}
                            Toggle Harold
                        </Label>
                    </FormGroup>
                </CardBody>
            </Card>
        )
    }

}

export default AudioFile;