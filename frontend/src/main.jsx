import * as Sentry from '@sentry/react';
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import {Routes, Route, useLocation, useNavigationType, BrowserRouter, createRoutesFromChildren, matchRoutes} from 'react-router'
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Toaster} from 'react-hot-toast';
import AuthProvider from './providers/authProvider.jsx'

const queryClient = new QueryClient();

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

Sentry.init({
  dsn: "https://ed1789f8354f75fad85a88c394dc2180@o4509984397656064.ingest.us.sentry.io/4509995667685376",
  integrations: [
    Sentry.reactRouterV7BrowserTracingIntegration({
      useEffect: React.useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes
    })
  ],
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <App />
          </AuthProvider>
          <Toaster position=' top-right' /> 
        </QueryClientProvider>
      </BrowserRouter> 
    </ClerkProvider>    
  </StrictMode>,
)
