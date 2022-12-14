import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '@store/users/usersSlice';
import { Image } from 'react-bootstrap';
import profile from '@images/profile.png';
import usersSelectors from '@store/users/users-selectors';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const email = useSelector(usersSelectors.getEmail);
  useEffect(() => {
    dispatch(getCurrentUser());
  });
  return (
    <div>
      <Image src={profile} />
      <p>{email}</p>
    </div>
  );
};

export default ProfilePage;
