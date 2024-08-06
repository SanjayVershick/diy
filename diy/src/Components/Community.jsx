import React from 'react';
import './Community.css'; // Import the CSS file

const Community = () => {
  
  return (
    <div className="community-background">
      <div className="overlay">
        <div className="text-container">
          <h1>Welcome to Community</h1>
          <h2>Connect, Share, Engage</h2>
          <p>
            Welcome to our DIY Crafts Community, where creativity knows no bounds! Our community is a vibrant space for enthusiasts of all levels to come together, share ideas, and inspire each other.
          </p>
          <div className="button-container">
            <a href="/aboutus" className="learn-more-button">Learn More</a>
            <a href="/Signup" className="learn-more-button">JOIN US</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
