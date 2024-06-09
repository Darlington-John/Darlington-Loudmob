
import { useLoud } from './context';
import playIcon from '~/assets/icons/PlayWhite.svg'
const CustomCursor = () => {
  const {cursorStyle, containerStyle,hoveredElement, cursorImage} = useLoud();
  return (
    <div>
           <div style={containerStyle}  className='ease-out duration-300 z-50 fixed pointer-events-none lg:hidden bg-lightBlue mix-blend-difference rounded-full'>
          <div  className={`  ease-out duration-[0.7s] flex items-center justify-center z-50 rounded-full pointer-events-none  ${hoveredElement ? 'p-16 sm:p-8' : 'p-4' }`}>
          {hoveredElement && cursorImage && (
<>{cursorImage ? (<img src={cursorImage} alt='' className= 'w-8 shrink-0 sm:w-6'/>) : ('')}</>
          )}
          </div>
      </div>
    </div>
  );
};

export default CustomCursor;
