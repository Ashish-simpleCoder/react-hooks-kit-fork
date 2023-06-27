import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home.page";
import { DocumentPage } from "./pages/Document.page";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/react-hooks" element={<DocumentPage />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
