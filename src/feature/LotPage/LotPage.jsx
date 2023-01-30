import React from 'react';
import { Alert, Button, Container, Form, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import lotsSelectors from '@store/lots/lots-selectors';
import usersSelectors from '@store/users/users-selectors';
import {
  setRaisedPrice,
  changeLotPrice,
  setErrorMessage,
  setHasErrors,
  setMessage,
} from '@store/lots/lotsSlice';
import { useNavigate } from 'react-router-dom';

const LotPage = () => {
  const lot = useSelector(lotsSelectors.getLot);
  const authUser = useSelector(usersSelectors.getLogInStatus);
  const price = useSelector(lotsSelectors.getRaisedPrice);
  const hasError = useSelector(lotsSelectors.getLotErrorStatus);
  const error = useSelector(lotsSelectors.getLotErrorMessage);
  const message = useSelector(lotsSelectors.getLotMessage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setPrice = event => {
    dispatch(setRaisedPrice(Number(event.target.value)));
  };

  const submitForm = event => {
    dispatch(changeLotPrice({ id: lot.id, price: price }));
    event.preventDefault();
    setTimeout(() => {
      dispatch(setRaisedPrice(0));
      dispatch(setHasErrors(false));
      dispatch(setErrorMessage(''));
      dispatch(setMessage(''));
      navigate('/');
    }, 3000);
  };

  return (
    <Container className="vh-100 mt-5">
      <section className="mx-auto w-50">
        {hasError === true ? (
          <Alert key="danger" variant="danger">
            {error}
          </Alert>
        ) : message ? (
          <Alert key="success" variant="success">
            {message}
          </Alert>
        ) : (
          ''
        )}
      </section>
      <section className="mx-auto w-50">
        <h3 className="fw-bold">Lot:{lot.shortName}</h3>
        <Image
          className="img-fluid"
          src={process.env.REACT_APP_IMAGE_PATH + lot.imageUrl}
        />
        <p>Description: {lot.description}</p>
        <p>End of auction: {lot.endTradeTime}</p>
        <p>Price: {lot.price}$</p>
        {authUser === true ? (
          <Form className="w-100 d-flex">
            <Form.Label className="me-3">Raise the price to:</Form.Label>
            <Form.Control className="w-25" type="text" onChange={setPrice} />
            <Button
              className="ms-3"
              variant="primary"
              type="submit"
              onClick={submitForm}>
              Raise
            </Button>
          </Form>
        ) : (
          ''
        )}
      </section>
    </Container>
  );
};

export default LotPage;
