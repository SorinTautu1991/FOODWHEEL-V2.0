import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { StyledButton } from '../styled-components/styled-components';
import { useAppContext } from '../../context/context';

function Search() {
  const { searchTerm, setSearchTerm, setQueryParams } = useAppContext();

  function handleChange(e) {
    const { value } = e.target;
    setSearchTerm(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQueryParams(searchTerm);
  }
  return (
    <Stack direction="row">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <FormControl>
          <InputLabel>Search recipes...</InputLabel>
          <Input
            type="text"
            onChange={handleChange}
            value={searchTerm}
            sx={{ width: 320 }}
          />
        </FormControl>
        <StyledButton variant="text" type="submit" sx={{ width: 100 }}>
          Search
        </StyledButton>
      </Box>
    </Stack>
  );
}

export default Search;
