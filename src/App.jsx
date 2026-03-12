import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';

// Internal Configuration & Context
import { pagesConfig } from './pages.config';

// Global Components
import PageNotFound from './lib/PageNotFound'; // Ensure this file exists as .jsx

/**
 * Destructure configuration from pages.config
 */
const { Pages, Layout, mainPage } = pagesConfig;

// Fallback logic for the landing page
const mainPageKey = mainPage || Object.keys(Pages)[0];
const MainPage = Pages[mainPageKey];

/**
 * LayoutWrapper
 * Wraps pages in the Navbar/Footer Layout if provided
 */
const LayoutWrapper = ({ children, currentPageName }) => {
  if (!Layout) return <>{children}</>;
  return <Layout currentPageName={currentPageName}>{children}</Layout>;
};

function App() {
  return (
    <Router>
      {/* Standard React Router setup using the 
          dynamic Pages object from pages.config.js 
      */}
      <Routes>
        {/* Root Route (e.g., /) */}
        <Route 
          path="/" 
          element={
            <LayoutWrapper currentPageName={mainPageKey}>
              <MainPage />
            </LayoutWrapper>
          } 
        />

        {/* Dynamic Route Generation */}
        {Object.entries(Pages).map(([path, PageComponent]) => {
          // Create a clean URL path (e.g., "About" becomes "/about")
          const routePath = path.toLowerCase();
          
          return (
            <Route
              key={path}
              path={`/${routePath}`}
              element={
                <LayoutWrapper currentPageName={path}>
                  <PageComponent />
                </LayoutWrapper>
              }
            />
          );
        })}

        {/* 404 - Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Global Toast Notifications (Used in Contact.jsx) */}
      <Toaster position="top-right" richColors closeButton />
    </Router>
  );
}

export default App;