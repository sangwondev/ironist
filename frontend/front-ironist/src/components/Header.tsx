import '../App.css';
import MenuIcon from '../assets/menu-menu-bar-svgrepo-com.svg';

const Header = () : JSX.Element => {
    return (
        <header className="header">
        <div className="menu">
          <nav>
            <a href="#" title="Menu">
              <img src={MenuIcon} alt="Menu" className="icon" />
            </a>
          </nav>
        </div>
        <div>
          <h1>️Ironist</h1>
        </div>
        <div className="profile-box">
          <div className="profile-info">
            <div className="profile-img">
              <img src="https://i.namu.wiki/i/Vgkz5PksndYUHUcis-Zg_hzvJ1JfPpZpoik-DNHax4VuO3MC_A3pppUcHz078AvsUY2BRzqrwgZMeWMP7DXcxM8Vp4ozBglxjgwlxGeYw1dxz4gKEwgjkIIslXRzPovZQ49xBhG5VS6iLdTbQ5ep1A.webp"
                alt="Profile" className="profile-img"/>
            </div>
            <div>
              <h6 className="member-name">Richard Rorty</h6>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </header>
    );

}

export default Header;