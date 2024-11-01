// Import
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollComponent = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // '#' 제거
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          navigate('', { replace: true }); 
        }, 100); 
      }
    }
  }, [hash, navigate]);
  return null;
}

export default ScrollComponent;