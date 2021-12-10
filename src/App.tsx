import { Header, Work, About, Skills, Contact, Footer } from './components/index';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
