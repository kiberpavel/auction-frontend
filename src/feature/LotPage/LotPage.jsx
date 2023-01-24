import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import lotsSelectors from '@store/lots/lots-selectors';

const LotPage = () => {
  const lot = useSelector(lotsSelectors.getLot);

  return (
    <Container className="vh-100 mt-5">
      <section className="mx-auto w-50">
        <Image
          className="img-fluid"
          src={process.env.REACT_APP_IMAGE_PATH + lot.imageUrl}
        />
        <h3 className="text-center">{lot.shortName}</h3>
        <p>{lot.description}</p>
        <p>{lot.endTradeTime}</p>
        <p>{lot.price}</p>
      </section>
    </Container>
  );
};

export default LotPage;
