import React from 'react';
import Form from 'react-bootstrap/Form';
import { Alert, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import lotsSelectors from '@store/lots/lots-selectors';
import { useDispatch } from 'react-redux';
import { setShortName, setDescription, setPrice } from '@store/lots/lotsSlice';
import { PropTypes } from 'prop-types';

const LotForm = ({
  submitForm,
  setSelectedFile,
  shortName,
  description,
  price,
}) => {
  const dispatch = useDispatch();
  const hasError = useSelector(lotsSelectors.getLotErrorStatus);
  const error = useSelector(lotsSelectors.getLotErrorMessage);
  const message = useSelector(lotsSelectors.getLotMessage);

  const handleFileSelect = event => {
    setSelectedFile(event.target.files[0]);
  };
  const setLotShortName = event => {
    dispatch(setShortName(event.target.value));
  };
  const setLotDescription = event => {
    dispatch(setDescription(event.target.value));
  };
  const setLotPrice = event => {
    dispatch(setPrice(Number(event.target.value)));
  };

  return (
    <div>
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
      <Form className="w-50">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Short name</Form.Label>
          <Form.Control
            type="text"
            value={shortName}
            placeholder="Vase"
            onChange={setLotShortName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            placeholder="Good condition"
            onChange={setLotDescription}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            placeholder="3.4"
            onChange={setLotPrice}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>File</Form.Label>
          <Form.Control type="file" onChange={handleFileSelect} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitForm}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

LotForm.propTypes = {
  submitForm: PropTypes.func,
  setSelectedFile: PropTypes.func,
  shortName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default LotForm;
