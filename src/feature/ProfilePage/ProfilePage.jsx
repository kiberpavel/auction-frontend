import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '@store/users/usersSlice';
import { Badge, Container, Image } from 'react-bootstrap';
import profile from '@images/profile.png';
import usersSelectors from '@store/users/users-selectors';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const email = useSelector(usersSelectors.getEmail);
  useEffect(() => {
    dispatch(getCurrentUser());
  });
  return (
    <Container className="vh-100 mt-5">
      <h1 className="mx-auto w-25 mb-xl-5">Profile</h1>
      <div className="mx-auto w-25">
        <Image src={profile} />
        <h5 className="mt-4">
          <Badge bg="dark">{email}</Badge>
        </h5>
      </div>
    </Container>
  );
};

export default ProfilePage;
