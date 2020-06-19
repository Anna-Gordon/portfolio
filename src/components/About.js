import React from 'react';
import './About.scss';

export default function(props) {
  const {data} = props;

  let name = data.name;
  let profilepic= "/images/profilepic.jpg" //+ data.image;
  console.log(profilepic)
  let bio = data.bio;
  let street = data.address.street;
  let city = data.address.city;
  let province = data.address.province;
  let zip = data.address.zip;
  let phone= data.phone;
  let email = data.email;
  let resumeDownload = data.resumedownload;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Anna Guliaeva Profile Pic" />
        </div>
        <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                <span>{name}</span>
                <br />
                <span>{street}<br />
                  {city}, {province} {zip}
                </span><br />
                <span>{phone}</span>
                <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
              </div>
            </div>
        </div>
      </div>
  </section>
  );
}