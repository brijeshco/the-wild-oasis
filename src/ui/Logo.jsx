import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDarkMode } from '../context/DarkModeContext';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? '/logo-dark.png' : '/logo-light.png';

  return (
    <StyledLogo>
      <Link to='/'>
        <Img src={src} alt='Logo' draggable={false} />
      </Link>
    </StyledLogo>
  );
}

export default Logo;