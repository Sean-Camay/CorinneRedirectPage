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
          borderRadius: '50px',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
        href='https://corinnecamay.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        Check out my new website
      </Button>
    </>
  );
};
