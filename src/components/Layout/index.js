import './index.scss';
import SideBar from "../SideBar/index"
import { Link, Outlet } from 'react-router-dom';
const Layout =()=>{
    return(
        <div className='App'>  
            <SideBar/>
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet/>

                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br/>
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>

                </span>
                <Link to="/contact" className="contact-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Layout;