import '../styles/Home/Footer.scss';

import In from "../assets/home/footer/linkedin.png";
import www from "../assets/home/footer/www.png";
import logo from "../assets/home/footer/logo_full_transparent.png";


export default function Footer() {
  return (
    <div className='footer'>
    <div className='sb__footer section__padding'>
    <div className='sb__footer-links'>
        <div className='sb__footer-links_div'>
            <h4>For Business</h4>
            <a href='/employer'>
                <p>Employer</p>
            </a>
            <a href='/employer'>
                <p>Customer App</p>
            </a>  
            <a href='/employer'>
                <p>Digital Inventory</p>
            </a>
        </div>
        <div className='sb__footer-links_div'>
            <h4>Partners</h4>
            <a href='/employer'>
                <p>Swing Tech</p>
            </a>
        
        </div>
        <div className='sb__footer-links_div'>
            <h4>Company</h4>
            <a href='/employer'>
                <p>About</p>
            </a>
            <a href='/employer'>
                <p>Press</p>
            </a> 
            <a href='/employer'>
                <p>Career</p>
            </a>
            <a href='/employer'>
                <p>Contact</p>
            </a>
        </div>
        <div className='sb__footer-links_div'>
            <h4 style={{textAlign:'Left'}}>Coming soon on</h4>
            <div className="socialmedia">
                <p><img src={In} alt="fb"/></p>
                <p><img src={www} alt="fb"/></p>

            </div>
           <div className="socialmedia_logo">
            <p><img src={logo} alt="fb"/></p>
           </div>
        </div>
    </div>

    <hr></hr>

    <div className='sb__footer-below'>
        <div className='sb__footer-copyright'>
            <p>
                @{new Date().getFullYear()} Grig Technologies Pvt Ltd
            </p>
        </div>
        <div className="sb__footer-below-links">
            <a href='/terms'><div><p>Terms & Conditions</p></div></a>
            <a href='/terms'><div><p>Privacy & policy</p></div></a>
            <a href='/terms'><div><p>Return & refund policy</p></div></a>
            <a href='/terms'><div><p>Plans and pricing</p></div></a>

        </div>
    </div>
</div>
</div>
  );
}