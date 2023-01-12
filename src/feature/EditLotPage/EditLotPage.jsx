import React, { useEffect, useState } from 'react';
import LotForm from '@common/LotForm/LotForm';
import { useDispatch, useSelector } from 'react-redux';
import lotsSelectors from '@store/lots/lots-selectors';
import { editLot } from '@store/lots/lotsSlice';
import {
  setErrorMessage,
  setHasErrors,
  setMessage,
} from '@store/lots/lotsSlice';

const EditLotPage = () => {
  let formData = new FormData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHasErrors(false));
    dispatch(setErrorMessage(''));
    dispatch(setMessage(''));
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const id = useSelector(lotsSelectors.getId);
  const shortName = useSelector(lotsSelectors.getShortName);
  const description = useSelector(lotsSelectors.getDescription);
  const price = useSelector(lotsSelectors.getPrice);

  const submitForm = event => {
    formData.append('id', id);
    formData.append('lot_image', selectedFile);
    formData.append('short_name', shortName);
    formData.append('description', description);
    formData.append('price', price);
    dispatch(editLot(formData));
    event.preventDefault();
  };
  return (
    <div>
      <LotForm
        submitForm={submitForm}
        setSelectedFile={setSelectedFile}
        shortName={shortName}
        description={description}
        price={price}
      />
    </div>
  );
};

export default EditLotPage;
