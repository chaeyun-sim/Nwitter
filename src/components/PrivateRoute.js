import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ isLoggedIn, component}) {
  return (
    isLoggedIn ? component : <Navigate to='/login' {...alert("접근할 수 없는 페이지입니다.")} />
  )
}

export default PrivateRoute 



// 참고 : https://hell-of-company-builder.tistory.com/274?category=902884