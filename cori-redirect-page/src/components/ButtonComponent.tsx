import Button from '@mui/material/Button';

export const ButtonComponent = () => {
  return (
    <>
      <Button
        variant='text'
        className='rounded-md'
        sx={{
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
        href='https://corinnecamay.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        Check out my new website{' '}
      </Button>
    </>
  );
};
