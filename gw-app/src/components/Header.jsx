import { Container, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Header (props){
    return <Container fluid>
        <Navbar bg="dark" variant="dark">
            <h1>Guess Who</h1>
        </Navbar>

    </Container>
}

export default Header;