import React, { useEffect, useState } from 'react';
import LotForm from '@common/LotForm/LotForm';
import { createLot } from '@store/lots/lotsSlice';
import { useDispatch, useSelector } from 'react-redux';
import usersSelectors from '@store/users/users-selectors';
import { getCurrentUser } from '@store/users/usersSlice';
import lotsSelectors from '@store/lots/lots-selectors';

const CreateLotPage = () => {
  let formData = new FormData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const userId = useSelector(usersSelectors.getId);
  const shortName = useSelector(lotsSelectors.getShortName);
  const description = useSelector(lotsSelectors.getDescription);
  const price = useSelector(lotsSelectors.getPrice);
  const submitForm = event => {
    formData.append('lot_image', selectedFile);
    formData.append('short_name', shortName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('user_id', userId);
    dispatch(createLot(formData));
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

export default CreateLotPage;
