import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import { Nav } from './Components/Nav'
import { Intro } from './Components/Intro'
import { About } from './Components/About'
import { Contacts } from './Components/Contacts'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedinIn, faGithub)

function App() {
  return (
    <div>
      <Nav></Nav>
      <Intro></Intro>
      <About></About>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
