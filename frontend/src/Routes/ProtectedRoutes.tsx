import React, { Children } from 'react'
import { Navigate, useLocation } from 'react-router'
import { useAuth } from '../Context/useAuth'

type Props = { children: React.ReactNode }

const ProtectedRoutes = (props: Props) => {
    const location = useLocation()
    const { isLoggedIn } = useAuth()
  return (
    isLoggedIn() ? (
        <>{Children}</> 
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    )
  )
}

export default ProtectedRoutes