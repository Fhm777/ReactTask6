import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Contacts() {
    return(
        <div id="Contacts" className="text-light py-3 text-center">
            <h2>Contacts</h2>
            <a href="https://github.com/Fhm777" className='text-light mx-2'><FontAwesomeIcon icon="fa-brands fa-github" /></a>
            <a href="https://www.linkedin.com/in/faheem-muhammad-ba7a48236/" className='text-light mx-2'><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
        </div>
    )
}