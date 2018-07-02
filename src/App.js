import React, { Component } from 'react';
import { Grid , Col , Row, Nav, Navbar, NavItem, MenuItem, NavDropdown, Button, Tabs, Tab, ButtonToolbar, Image} from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Fast Fox</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Projetos
    </NavItem>
    <NavItem eventKey={2} href="#">
      Perfil
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
      <div className="static-modal">
</div>;
    </NavDropdown>
  </Nav>
</Navbar>;

    <Grid>
      <Row className="show-grid">
        <Col lg={8}>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="Issues">
            <ButtonToolbar>
              <p></p>
              {/* Standard button */}
              <Button>Ver Todas as issues</Button>

              {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
              <Button bsStyle="primary">Criar um Epic</Button>

              {/* Indicates a successful or positive action */}
              <Button bsStyle="success">Criar uma história</Button>

              {/* Indicates a dangerous or potentially negative action */}
              <Button bsStyle="danger">Criar um bug</Button>
          </ButtonToolbar>;
  </Tab>
  <Tab eventKey={2} title="Notícias">
    Tab 2 content
  </Tab>
  <Tab eventKey={3} title="Help">
    Tab 3 content
  </Tab>
</Tabs>
        </Col>

        <Col lg={4}>
        <Image src="https://i.stack.imgur.com/CIq6u.gif" rounded />
        </Col>
        
      </Row>
    </Grid>
      </div>
    );
  }
}

export default App;
