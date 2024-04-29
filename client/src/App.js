import { Routes, Route } from "react-router";
import WelcomePage from "./pages/welcomePage.jsx"
import ContactShowPage from "./pages/contactShowPage.jsx";
import AllContacts from "./pages/allContacts.jsx";
import NavBar from "./components/NavBar.jsx";
import AddContact from "./pages/addContact.jsx";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-300">
      <NavBar />
      <div className="pt-16">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<WelcomePage />} />
        <Route path="/addcontact" element={<AddContact />} />
        <Route path="/contact/:id" element={<ContactShowPage />} />
        <Route path="/allcontacts" element={<AllContacts />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
