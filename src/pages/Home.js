import { useNavigate } from 'react-router-dom';
import "../styles/Home.css"

import Header from '../components/Header';

const Home = ({ setauth }) => {

  const navigate = useNavigate();

  const signIn = ( formdata ) => {
    navigate('SignIn/');
  }
  const signUp = () => {
    navigate('SignUp/');
  }

  return (
    <div>
      <Header
        setauth={setauth} 
        signIn={signIn}
        signUp={signUp}
       />
    </div>
  );
}

export default Home
