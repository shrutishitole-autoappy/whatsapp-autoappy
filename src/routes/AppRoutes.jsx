import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

const LandingPage = lazy(() => import('../features/landing-page/LandingPage'));
const Security    = lazy(() => import('../pages/Security/Security'));
const Solutions   = lazy(() => import('../pages/Solutions/Solutions'));
const Business    = lazy(() => import('../pages/Business/Business'));
const Login       = lazy(() => import('../pages/Login/Login'));
const Signup      = lazy(() => import('../pages/Signup/Signup'));
const ChatPage    = lazy(() => import('../pages/Chat/ChatPage'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Landing page & Public pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/security" element={<Security />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solution" element={<Solutions />} />
        <Route path="/business" element={<Business />} />

        {/* Public-only routes — authenticated users bounce to /chat */}
        <Route element={<PublicRoutes />}>
          <Route path="/login"  element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Protected routes — unauthenticated users bounce to /login */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/chat" element={<ChatPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Suspense>
  );
}
