import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CustomeRoute from "./router/route";
import { Footer, Header } from "./data/components";

function App() {

  return (
    <>
       <BrowserRouter>
      <Header />
        <CustomeRoute />
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
