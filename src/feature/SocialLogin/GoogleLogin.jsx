import React from 'react';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useDispatch } from 'react-redux';
import { loginUserViaSocial } from '@store/users/usersSlice';

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const clientId = `${process.env.REACT_APP_CLIENT_ID}`;

  return (
    <div className="w-50">
      <LoginSocialGoogle
        client_id={clientId}
        onReject={error => {
          console.log(error);
        }}
        onResolve={response => {
          dispatch(loginUserViaSocial({ email: response.data.email }));
        }}>
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
  );
};

export default GoogleLogin;
