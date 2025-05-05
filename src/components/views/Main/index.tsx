import { ButtonComponent } from '../../ButtonComponent';
import { ImagesComponent } from '../../Images/ImagesComponent';
// import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex-row'>
        <h2 className='text-black text-2xl font-bold p-4 tracking-wide'>
          My name has changed but I haven't
        </h2>
      </div>
      <div className='flex-row p-4'>
        <ImagesComponent />
      </div>
      <div className='flex-row p-4'>
        <ButtonComponent />
      </div>
      {/* <Link to='/testing'>Testing</Link> */}
    </div>
  );
};

export default Main;
