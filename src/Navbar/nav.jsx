import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Navcompo(props) {
  return (
    <Navbar className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Welcome Nerd
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navcompo;


