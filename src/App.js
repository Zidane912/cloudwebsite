import React from 'react';
import Home from './Webpages/Home/Home';
import Services from './Webpages/Services/Services';
import ContactUs from './Webpages/ContactUs/ContactUs';
import Footer from './Webpages/Footer/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

// function Home() {
//   return <h2>Home Title</h2>;
// }

// function Portfolio() {
//   return <h2>About</h2>;
// }

// function AboutUs() {
//   return <h2>About Us</h2>;
// }

// function ContactUs() {
//   return <h2>Contact Us</h2>;
// }

// export default App; not needed exported above

        