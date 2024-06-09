import { createContext, useContext, useState, useEffect} from 'react';

const LoudContext = createContext(null);

export const LoudProvider = ({ children }) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  const cursorSize = 20;
  const containerPadding = 5;
  const transitionDuration = '0.1s';

  const containerStyle = {
    top: `${position.y - cursorSize / 2 - containerPadding}px`,
    left: `${position.x - cursorSize / 2 - containerPadding}px`,

 

    transition: `top ${transitionDuration} ease-out, left ${transitionDuration} ease-out`,
  };

  const cursorStyle = {
    width: `20px`,
    height: `20px`,

  };
  const [cursorImage, setCursorImage] = useState(null); // State for mainImage

  const handleMouseEnter = (image) => {
    setHoveredElement(true);
    setCursorImage(image); // Set mainImage when element is hovered
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
    setCursorImage(null); // Reset mainImage when leaving the element
  };
  const value = {
cursorStyle, containerStyle, handleMouseLeave, handleMouseEnter, hoveredElement,position, setPosition, cursorImage, setCursorImage
  };

  return <LoudContext.Provider value={value}>{children}</LoudContext.Provider>;
};

export const useLoud = () => {
  const context = useContext(LoudContext);
  if (!context) {
    throw new Error('useLoud must be used within a LoudProvider');
  }
  return context;
};

export default LoudContext;
