    // page routing
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import SignInPage from './page';
    import ProfilePage from './profilePage';

    function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      );
    }

    export default App;