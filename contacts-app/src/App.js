import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import HomePage from "./pages/HomePage/HomePage";
import PersonalInfoPage from "./pages/PersonalInfoPage/PersonalInfoPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/personal" element={ <PersonalInfoPage/>} />
      <Route path="/contacts" element={ <ContactsPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
