import React, { Component } from 'react';
import HeaderComponent from './Header';
import HomePageComponent from './HomePage';
import FooterComponent from './Footer';
import './happyLoft.css';

class HappyLoftApp extends Component {
    render() {
        return ( 
            // <div>
            //     <h1>Happy loft</h1>
            // </div>
            <>
                <div className="app-container">
                    <div className="header-container">
                        <HeaderComponent />
                    </div>

                    <div className="home-container">
                        <HomePageComponent />
                    </div>

                    <div className="footer-container">
                        <FooterComponent />
                    </div>
                    
                </div>
            </>
            //     <Router>
            //         <>
            //             {/* <MenuComponent /> */}
            //             <Switch>
            //                 <Route path="/" exact component={LoginComponent} />
            //                 <Route path="/login" exact component={LoginComponent} />
            //                 <AuthenticatedRoute path="/courses" exact component={ListCoursesComponent} />
            //             </Switch>
            //         </>
            //     </Router>
        )
    }
}

export default HappyLoftApp;