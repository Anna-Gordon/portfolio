import React from 'react';
import './Footer.scss';

export default function(props) {
const {data} = props;

  if(!data){
    console.log("No data received");
  }
    let networks= data.social.map(network => {
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    })
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2020 Anna Guliaeva</li>
              {/* <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li> */}
            </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
  </footer>
  );
}