import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ordersSelectors from '@store/orders/orders-selectors';
import { Button, Container, Table } from 'react-bootstrap';
import { setTotalSum, payOrders } from '@store/orders/orderSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector(ordersSelectors.getUserOrders);
  const totalSum = useSelector(ordersSelectors.getTotalSum);
  let sum = 0;
  let ordersId = [];

  useEffect(() => {
    orders.forEach(order => {
      sum += order.buyer.lot.price;
      ordersId.push(order.id);
    });
    dispatch(setTotalSum(sum));
  });

  const doPayment = () => {
    dispatch(payOrders({ orders: ordersId }));
  };

  return (
    <Container className="vh-100 mt-5">
      <section>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.buyer.lot.shortName}</td>
                <td>
                  <img
                    src={
                      process.env.REACT_APP_IMAGE_PATH +
                      order.buyer.lot.imageUrl
                    }
                    width="200px"
                  />
                </td>
                <td>{order.buyer.lot.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      <section className="float-end">
        <h5>Total sum:{totalSum}</h5>
        <Button onClick={doPayment}>Pay</Button>
      </section>
    </Container>
  );
};

export default CartPage;
