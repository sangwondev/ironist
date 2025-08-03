import MailIcon from '../assets/mail.png';
import GithubIcon from '../assets/github-mark.svg';
import '../App.css';

const Footer : JSX.Element = () => { 
    return (
        <footer className="footer">
        <div className="footer-content">
          <p>
            © 2025 Ironist. Released under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT
              License</a>.
          </p>
          <div className="footer-links">
            <a href="https://github.com/sangwondev/ironist" target="_blank" aria-label="GitHub">
              <img src={GithubIcon} alt="Github" className="icon" />
            </a>
            <a href="mailto:sangwonh34@gmail.com" aria-label="Email">
              <img src={MailIcon} alt="Email" className="icon" />
            </a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;