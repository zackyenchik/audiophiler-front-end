import React from 'react';
import {
    Container,
    Form,
    Input,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return(
            <div>
                <Navbar color="primary" dark fixed="top" expand="lg">
                    <Container>
                    <NavbarBrand tag="primary">Audiophiler</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/upload">Upload</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/mine">My Files</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar>
                            <Form className="my-2 my-lg-0" id="search" inline action="/search" method="GET">
                                <Input className="mr-sm-2" id="search-field" name="q" type="text" placeholder="Search For Files"/>
                                <Button className="my-2 my-sm-0" type="submit">Search</Button>
                            </Form>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown className="navbar-user my-2" nav inNavbar>
                                <DropdownToggle nav caret>
                                    <img src="https://profiles.csh.rit.edu/image/test" alt="Profile" />
                                    Username
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem>
                                        Settings
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default NavBar;