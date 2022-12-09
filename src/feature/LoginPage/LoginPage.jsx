import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import useUserSelectors from '@store/users/users-selectors';
import { setPassword, setEmail, loginUser } from '@store/users/usersSlice';
import GoogleLogin from '@feature/SocialLogin/GoogleLogin';
import FacebookLogin from '@feature/SocialLogin/FacebookLogin';
import { Link, Navigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();

  const email = useSelector(useUserSelectors.getEmail);
  const password = useSelector(useUserSelectors.getPassword);
  const hasError = useSelector(useUserSelectors.getErrorStatus);
  const error = useSelector(useUserSelectors.getError);
  const status = useSelector(useUserSelectors.getLogInStatus);

  const setUserEmail = event => {
    dispatch(setEmail(event.target.value));
  };

  const setUserPassword = event => {
    dispatch(setPassword(event.target.value));
  };

  const submitForm = event => {
    dispatch(loginUser({ email, password }));
    event.preventDefault();
  };

  return status ? (
    <Navigate to="/" />
  ) : (
    <div className="auth-wrap">
      <h1 className="mx-auto w-50">Login</h1>
      <section className="mx-auto w-50">
        {hasError === true ? <p className="text-danger">{error}</p> : ''}
      </section>
      <section className="d-flex align-items-center justify-content-center">
        <Form className="w-50">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={setUserEmail}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={setUserPassword}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Link to="/register">Register</Link>
          </Form.Group>
          <Form.Group className="d-flex mb-3">
            <GoogleLogin />
            <FacebookLogin />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default LoginPage;
