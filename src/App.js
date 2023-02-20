import {useState} from 'react';
import MainFeed from "./components/MainFeed";
import SignInFeed from "./components/SignFeed";

function App() {
  const [page, setPage] = useState('main');
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <div className="bg-gray-100">
      {page !== 'main' && <SignInFeed page={page} setIsSignedIn={setIsSignedIn} setPage={setPage}/>}
      {page === 'main' && <MainFeed setPage={setPage} isSignedIn={isSignedIn}/>}
    </div>
  );
}

export default App;
