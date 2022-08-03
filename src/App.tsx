import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/layout/Layout';
import Home from './pages/Home';
import PropsExample from './pages/PropsExample';
import ServerExample from './pages/ServerExample';
import EventsExample from './pages/EventsExample';
import HooksExample from './pages/HooksExample';
import Routess from './pages/Routes';
import PostExample from './pages/PostExample';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout />} >
          <Route index element={ <Home /> } />
          <Route path="properties" element={ <PropsExample  /> } />
          <Route path="server"     element={ <ServerExample /> } />
          <Route path="events"     element={ <EventsExample /> } />
          <Route path="hooks"      element={ <HooksExample  /> } />
          <Route path="routes"     element={ <Routess       /> } />
          <Route path="routes/:id" element={ <PostExample   /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
