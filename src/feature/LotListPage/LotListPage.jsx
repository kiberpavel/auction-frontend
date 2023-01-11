import React, { useEffect } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  listOfLots,
  deleteLot,
  setShortName,
  setDescription,
  setPrice,
  setId,
} from '@store/lots/lotsSlice';
import lotsSelectors from '@store/lots/lots-selectors';
import { useNavigate } from 'react-router-dom';

const LotListPage = () => {
  const dispatch = useDispatch();
  const lots = useSelector(lotsSelectors.getLots);
  const listOfLotsStatus = useSelector(lotsSelectors.getListOfLotsStatus);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listOfLots());
  }, []);

  const removeLot = id => {
    dispatch(deleteLot({ id: id }));
    dispatch(listOfLots());
  };

  const editLot = lot => {
    dispatch(setShortName(lot.shortName));
    dispatch(setDescription(lot.description));
    dispatch(setPrice(lot.price));
    dispatch(setId(lot.id));
    navigate('/lot/update');
  };

  return listOfLotsStatus === false ? (
    <Spinner animation="border" variant="dark" />
  ) : (
    <div>
      <Row xs={1} md={2} className="g-4">
        {lots.map(lot => (
          <Col key={lot.id}>
            <Card>
              <Card.Img
                variant="top"
                src={process.env.REACT_APP_IMAGE_PATH + lot.imageUrl}
              />
              <Card.Body>
                <Card.Title>{lot.shortName}</Card.Title>
                <Card.Text>{lot.price + '$'}</Card.Text>
                <Card.Text>{lot.description}</Card.Text>
              </Card.Body>
              <button onClick={() => editLot(lot)}>Edit lot</button>
              <button onClick={() => removeLot(lot.id)}>Remove</button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LotListPage;
