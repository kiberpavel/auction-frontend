import React from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useDispatch } from 'react-redux';
import { loginUserViaSocial } from '@store/users/usersSlice';

const FacebookLogin = () => {
  const dispatch = useDispatch();
  const appId = `${process.env.REACT_APP_APP_ID}`;

  return (
    <div className="w-50">
      <LoginSocialFacebook
        appId={appId}
        onReject={error => {
          console.log(error);
        }}
        onResolve={response => {
          dispatch(loginUserViaSocial({ email: response.data.email }));
        }}>
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  );
};

export default FacebookLogin;
