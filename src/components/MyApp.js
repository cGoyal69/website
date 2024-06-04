import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Banner';
import { NavBar } from './Navbar';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';

function MyApp() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default MyApp;