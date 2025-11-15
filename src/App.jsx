import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@contexts/auth-context';
import Header from '@components/layout/header';
import BottomNav from '@components/layout/bottom-nav';
import { ToolCardSkeleton } from '@components/ui/skeleton';

// Lazy load pages
const Home = lazy(() => import('@pages/home'));
const Create = lazy(() => import('@pages/create'));
const Profile = lazy(() => import('@pages/profile'));
const Admin = lazy(() => import('@pages/admin'));
const NotFound = lazy(() => import('@pages/404'));

// Loading fallback
const PageLoader = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <ToolCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pb-16 md:pb-0">
          <Header />

          <main className="min-h-[calc(100vh-4rem)]">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin/*" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <BottomNav />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
