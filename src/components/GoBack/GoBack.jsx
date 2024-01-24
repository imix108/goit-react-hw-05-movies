import { FiArrowLeftCircle } from 'react-icons/fi';
import { Button, LinkGoBack } from './GoBack.styled';

export const GoBack = ({ to }) => {
  return (
    <LinkGoBack to={to}>
      <Button>
        <FiArrowLeftCircle />
      </Button>
    </LinkGoBack>
  );
};

export default GoBack;
