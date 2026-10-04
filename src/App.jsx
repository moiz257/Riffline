import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Login from './pages/login'
import Signup from './pages/signup';
import Landing from './pages/landing';
import SetupProfile from './pages/setup-profile';
import Home from './pages/home';
import SelectInstrument from './pages/select-instrument';
import Manage from './pages/manage';
import Discover from './pages/discover';
import Profile from './pages/profile';
import EditProfile from './pages/edit-profile';
import Inbox from './pages/inbox';
import Calendar from './pages/calendar';
import Create from './pages/create';
import AddMedia from './pages/add-media';
import UserDrops from './pages/user-drops';
import ViewListings from './pages/view-lisitngs';
import ViewApplicants from './pages/view-applicants';
import TagPeople from './pages/tag-people';
import Connections from './pages/connections';
import MakeItOfficial from './pages/make-it-official';
import TagLocation from './pages/tag-location';
import ApplicationReview from './pages/application-review';
import BuildSquad from './pages/build-squad';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/select-instrument" element={<SelectInstrument />} />
      <Route path="/setup-profile" element={<SetupProfile />} />
      <Route path="/manage" element={<Manage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/messages" element={<Inbox />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/create" element={<Create />} />
      <Route path="/add-media" element={<AddMedia />} />
      <Route path="/user-drops" element={<UserDrops />} />
      <Route path="/view-listings" element={<ViewListings />} />
      <Route path="/view-applicants" element={<ViewApplicants />} />
      <Route path="/tag-people" element={<TagPeople />} />
      <Route path="/connections" element={<Connections />} />
      <Route path="/make-it-official" element={<MakeItOfficial />} />
      <Route path="/tag-location" element={<TagLocation />} />
      <Route path="/application-review" element={<ApplicationReview />} />
      <Route path="/build-squad" element={<BuildSquad />} />
    </Routes>
  );
}

export default App;