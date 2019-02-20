import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardText } from 'reactstrap';

class CSHPlug extends React.Component {
    render() {
        return(
            <div className="container">
                <Card color="primary" outline className="my-5" id="plug">
                    <CardHeader>
                        <a href="https://plug.csh.rit.edu" title="Advertisements by CSH: Plug">
                            Advertisements by CSH: Plug
                        </a>
                    </CardHeader>
                    <CardBody>
                        <CardText className="text-center">
                        <a href="https://plug.csh.rit.edu" title="Advertisements by CSH: Plug">
                            <img src="https://plug.csh.rit.edu/data" alt="Advertisements by CSH: Plug" />
                        </a>
                        </CardText>
                    </CardBody>
                </Card>
            </div>

        )
    }
}
export default CSHPlug;