import React, { useEffect } from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  listOfLots,
  deleteLot,
  setShortName,
  setDescription,
  setPrice,
  setId,
  setLot,
} from '@store/lots/lotsSlice';
import lotsSelectors from '@store/lots/lots-selectors';
import { useNavigate } from 'react-router-dom';
import usersSelectors from '@store/users/users-selectors';
import { getCurrentUser } from '@store/users/usersSlice';
import { userOrders } from '@store/orders/orderSlice';

const LotListPage = () => {
  const dispatch = useDispatch();
  const lots = useSelector(lotsSelectors.getLots);
  const listOfLotsStatus = useSelector(lotsSelectors.getListOfLotsStatus);
  const authStatus = useSelector(usersSelectors.getLogInStatus);
  const userRole = useSelector(usersSelectors.getRole);
  const navigate = useNavigate();
  const userId = useSelector(usersSelectors.getId);

  useEffect(() => {
    authStatus ? dispatch(getCurrentUser()) : null;
    dispatch(listOfLots(authStatus));
  }, []);

  useEffect(() => {
    authStatus && userId !== '' ? dispatch(userOrders(userId)) : null;
  }, [userId]);

  const removeLot = id => {
    dispatch(deleteLot({ id: id }));
    setTimeout(() => {
      dispatch(listOfLots(authStatus));
    }, 2000);
  };

  const editLot = lot => {
    dispatch(setShortName(lot.shortName));
    dispatch(setDescription(lot.description));
    dispatch(setPrice(lot.price));
    dispatch(setId(lot.id));
    navigate('/lot/update');
  };

  const currentLot = lot => {
    dispatch(setLot(lot));
    navigate('/lot/current');
  };

  return listOfLotsStatus === false ? (
    <Container className="vh-100 mt-5">
      <h1 className="mx-auto w-25">
        <Badge bg="secondary">Loading...</Badge>
      </h1>
    </Container>
  ) : (
    <div className="mt-5">
      <h1 className="mx-auto w-25 mb-xl-5">List of lots</h1>
      <Container className="vh-100 mt-3">
        <Row xs={1} md={3} className="g-4">
          {lots.map(lot =>
            lot.status === 'active' ? (
              <Col key={lot.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src={process.env.REACT_APP_IMAGE_PATH + lot.imageUrl}
                    className="img-responsive"
                  />
                  <Card.Body>
                    <Card.Title>{lot.shortName}</Card.Title>
                    <Card.Text>{lot.price + '$'}</Card.Text>
                    <Card.Text>{lot.description}</Card.Text>
                  </Card.Body>
                  <section>
                    <Button variant="success" onClick={() => currentLot(lot)}>
                      View
                    </Button>
                    {authStatus ? (
                      userRole === 'ROLE_ADMIN' ||
                      userRole === 'ROLE_VENDOR' ? (
                        <>
                          <Button
                            variant="primary"
                            className="ms-2 me-2"
                            onClick={() => editLot(lot)}>
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => removeLot(lot.id)}>
                            Remove
                          </Button>
                        </>
                      ) : (
                        ''
                      )
                    ) : (
                      ''
                    )}
                  </section>
                </Card>
              </Col>
            ) : (
              ''
            ),
          )}
        </Row>
      </Container>
    </div>
  );
};

export default LotListPage;
