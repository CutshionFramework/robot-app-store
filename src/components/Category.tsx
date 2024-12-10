import Button from '@mui/material/Button';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import FactoryRoundedIcon from '@mui/icons-material/FactoryRounded';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import Stack from '@mui/material/Stack';

export default function Category() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        style={{
          border: 'none',
          borderRadius: '15px',
          color: 'white',
        }}
        variant="contained"
        startIcon={<FastfoodRoundedIcon />}>
        Food / Beverage
      </Button>
      <Button
        style={{
          border: 'none',
          borderRadius: '15px',
          color: 'black',
          backgroundColor: 'rgb(227, 231, 235)',
        }}
        startIcon={<FactoryRoundedIcon />}>
        Industrial
      </Button>
      <Button
        style={{
          border: 'none',
          borderRadius: '15px',
          color: 'black',
          backgroundColor: 'rgb(227, 231, 235)',
        }}
        variant="outlined"
        startIcon={<MovieCreationIcon />}>
        Entertainment
      </Button>
    </Stack>
  );
}
