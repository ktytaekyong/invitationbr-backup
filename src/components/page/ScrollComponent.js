// Import
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          navigate(`${location.pathname}${location.search}`, { replace: true });
        }, 100); 
      }
    }
  }, [location.hash, location.pathname, location.search, navigate]);
  return null;
}

export default ScrollComponent;