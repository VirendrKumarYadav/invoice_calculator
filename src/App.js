import logo from './logo.svg';
import './App.css';
import Header from './componant/Header/Header'
import Footer from './componant/Footer/Footer';
import Section from './componant/Sections/Section';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Section />
          <Footer />
        </div>
      ),
   
    },
  ]);



  return (
    <div className="App">
      <RouterProvider router={route}>
      </RouterProvider>
    </div>
  );
}

export default App;
