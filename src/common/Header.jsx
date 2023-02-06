import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { logOutUser } from '@store/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import usersSelectors from '@store/users/users-selectors';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import ordersSelectors from '@store/orders/orders-selectors';

const Header = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector(usersSelectors.getLogInStatus);
  const userRole = useSelector(usersSelectors.getRole);
  const email = useSelector(usersSelectors.getEmail);
  const count = useSelector(ordersSelectors.getCount);

  const doLogOut = () => {
    dispatch(logOutUser());
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="header-link me-4" to="/">
            Auction
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {loginStatus === true ? (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {userRole === 'ROLE_ADMIN' || userRole === 'ROLE_VENDOR' ? (
                <Navbar.Text>
                  <Link className="header-link me-4" to="/lot/create">
                    Create lot
                  </Link>
                </Navbar.Text>
              ) : (
                ''
              )}
            </Nav>
            <Nav className="justify-content-end">
              <NavDropdown title={email} id="navbarScrollingDropdown">
                <Navbar.Text>
                  <Link className="header-link" to="/profile">
                    <NavDropdown.ItemText>Profile</NavDropdown.ItemText>
                  </Link>
                </Navbar.Text>
                <NavDropdown.Divider />
                <button className="header-button" onClick={doLogOut}>
                  <NavDropdown.ItemText>LogOut</NavDropdown.ItemText>
                </button>
              </NavDropdown>
              <Navbar.Text>
                <Link className="header-link me-1" to="/cart">
                  Cart:
                  <span className="ms-1 text-light">{count}</span>
                </Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        ) : (
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end">
            <Nav>
              <Navbar.Text>
                <Link className="header-link me-4" to="/login">
                  Login
                </Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
