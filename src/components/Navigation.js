import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './styles/navbarStyles.css';

const settings = <FontAwesomeIcon icon={faGear} />;
const back = <FontAwesomeIcon icon={faArrowLeft} />;

const Navigation = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <nav>
      <a onClick={handleBackClick}>{back}</a>
      <h3>TOP COINS</h3>
      <a>{settings}</a>
    </nav>
  );
};

export default Navigation;
