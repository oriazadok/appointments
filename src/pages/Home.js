import { useNavigate } from 'react-router-dom';
import "../styles/Home.css"

import Header from '../components/Header';

const Home = () => {

  const navigate = useNavigate();

  const signIn = () => {
    navigate('SignIn/');
  }
  const signUp = () => {
    navigate('SignUp/');
  }

  return (
    <div>
      <Header 
        signIn={signIn}
        signUp={signUp}
       />
    </div>
  );
}

export default Home
