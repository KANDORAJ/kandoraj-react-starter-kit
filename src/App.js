import axios from 'axios';
import logo from './logo.svg';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    async function getUser() {
      try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  })
  return (
    <div className="App">
      test2
    </div>
  );
}

export default App;
