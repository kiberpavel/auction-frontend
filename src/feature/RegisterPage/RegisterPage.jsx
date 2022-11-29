import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useUserSelectors from '@store/users/users-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword, setEmail, addUser } from '@store/users/usersSlice';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const email = useSelector(useUserSelectors.getEmail);
  const password = useSelector(useUserSelectors.getPassword);
  const hasError = useSelector(useUserSelectors.getErrorStatus);
  const error = useSelector(useUserSelectors.getError);

  const setUserEmail = event => {
    dispatch(setEmail(event.target.value));
  };

  const setUserPassword = event => {
    dispatch(setPassword(event.target.value));
  };

  const submitForm = event => {
    dispatch(addUser({ email, password }));
    event.preventDefault();
  };

  return (
    <div className="auth-wrap">
      <h1 className="mx-auto w-50">Registration</h1>
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
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default RegisterPage;
