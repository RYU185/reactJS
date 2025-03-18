import React from 'react'
import { Outlet } from 'react-router-dom'

function MovieWrapper() {
  return (
    <div>
        <h1></h1>
        <Outlet />
        {/* Outlet: react-router-dom의 컴포먼트로 
        그 밑에 자식이 있다면 부모 컴포먼트를 통해 자식도 보여준다 */}
    </div>
  )
}

export default MovieWrapper