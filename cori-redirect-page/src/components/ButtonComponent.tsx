import Button from '@mui/material/Button';

export const ButtonComponent = () => {
  const handleRedirect = () => {
    window.open('https://corinnecamay.com', '_blank', 'noopener,noreferrer');
  };
  return (
    <>
      <Button className='w-7' onClick={handleRedirect}>
        Check out my new website{' '}
      </Button>
    </>
  );
};
