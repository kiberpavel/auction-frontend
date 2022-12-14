import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { logOutUser } from '@store/users/usersSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const doLogOut = () => {
    dispatch(logOutUser());
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Auction</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Text>
              <Link className="header-link" to="/">
                Home
              </Link>
            </Navbar.Text>
          </Nav>
          <Nav>
            <Navbar.Text>
              <Link className="header-link" to="/profile">
                Profile
              </Link>
            </Navbar.Text>
            <button className="header-button" onClick={doLogOut}>
              LogOut
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
