import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import UserContext from './context/UserContext';
import ProfileService from './services/profile';

function App() {

  const [name, setName] = useState('null');
  const profileService = new ProfileService();
  const userData = {
    name: [name, setName],
  }

  async function getUser() {
    const data = await profileService.getProfile();
    setName(data.user.fullName);
  }

  useEffect(() => {
    getUser();
  }, []);


  return (
    <UserContext.Provider value={userData}>
      <div className="App">
        <h1>Aprendiendo UseContext</h1>
        <Profile/>
        <Header/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
