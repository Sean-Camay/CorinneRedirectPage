import { ButtonComponent } from '../../ButtonComponent';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <span className='bg-amber-400 text-3xl'>Main</span>
      <ButtonComponent />
      <Link to='/testing'>Testing</Link>{' '}
    </div>
  );
};

export default Main;
