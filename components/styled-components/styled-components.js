import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledSpan = styled('span')({
  color: 'rgba(210, 130, 244, 0.8)',
  fontWeight: 'bolder',
});
const StyledButton = styled(Button)({
  background: 'rgba(210, 130, 244, 0.8)',
  '&:hover': { opacity: 0.7 },
  textTransform: 'none',
});
export { StyledSpan, StyledButton };
