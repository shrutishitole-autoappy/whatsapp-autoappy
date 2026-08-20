import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * Wraps public-only routes (login, signup).
 * Already-authenticated users are redirected directly to /chat.
 */
export default function PublicRoutes() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/chat" replace /> : <Outlet />;
}
