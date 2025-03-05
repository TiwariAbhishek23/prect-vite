import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import { useState, useEffect } from 'preact/hooks';
import { BrowserRouter } from 'react-router';

export default function SidePanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Simulate checking authentication status
    // In a real app, you would check your auth state here
    const checkAuth = () => {
      // For this example, we'll just set it to false
      // In a real app, you might check a token in localStorage or a cookie
      setIsAuthenticated(true);
    };

    checkAuth();
  }, []);

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push('/login');
  //   }
  // }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  return (
    <BrowserRouter>
      <div className='flex min-h-screen flex-col'>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
