import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CustomeRoute from "./router/route";
import { Footer, Header } from "./data/components";

function App() {

  return (
    <>
      <Header />
       <BrowserRouter>
        <CustomeRoute />
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
