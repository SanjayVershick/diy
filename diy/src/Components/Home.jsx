import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Homes.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import stockImage from '../assets/stock.jpg';
const UNSPLASH_ACCESS_KEY = 'G_X8v2QjYTs3g2GHB9NW10NSa59GWXIZFo9UDy1-VnU'; // Replace with your Unsplash Access Key

const Home = () => {
  const [showCraftCategories, setShowCraftCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState({});
  const categoryRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      const categoryQueries = {
        'Kids Craft': 'kids crafts',
        'Home Craft': 'home crafts',
        'Paper Craft': 'paper crafts',
        'Wedding Craft': 'wedding crafts',
      };

      const fetchCategoryImages = async (query) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query,
            client_id: UNSPLASH_ACCESS_KEY,
            per_page: 3,
          },
        });
        // Include YouTube links here for each fetched item
        const youtubeLinks = {
          'kids crafts': [
            'https://youtu.be/Fedi_QSsdCc?feature=shared',
            'https://youtu.be/H7F8bI-XNRc?feature=shared',
            'https://youtu.be/_ftsTZf6g6c?feature=shared',
          ],
          'home crafts': [
            'https://youtu.be/KKojHFky150?feature=shared',
            'https://youtu.be/c32njYE6wIo?feature=shared',
            'https://youtu.be/doz61RhNsvw?feature=shared',
          ],
          'paper crafts': [
            'https://youtu.be/LWsL-_pgmTc?feature=shared',
            'https://youtu.be/AHdAkO0W9J0?feature=shared',
            'https://youtu.be/P54oi2y00fo?feature=shared',
          ],
          'wedding crafts': [
            'https://youtu.be/yUNInc52GIc?feature=shared',
            'https://youtu.be/3cdbEc3vAEI?feature=shared',
            'https://youtu.be/G22nMcR1Grk?feature=shared',
          ],
        };

        return response.data.results.map((image, index) => ({
          title: image.alt_description,
          link: youtubeLinks[query][index], // Link to the YouTube video
          image: image.urls.small,
        }));
      };

      const fetchedCategories = {};
      for (const category in categoryQueries) {
        fetchedCategories[category] = await fetchCategoryImages(categoryQueries[category]);
      }
      setCategories(fetchedCategories);
    };

    fetchImages();
  }, []);

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null); // Close the category if clicked again
    } else {
      setActiveCategory(category);
      setTimeout(() => {
        categoryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 0);
    }
  };

  const handleCraftsLinkClick = () => {
    if (showCraftCategories) {
      setShowCraftCategories(false);
      setActiveCategory(null);
    } else {
      setShowCraftCategories(true);
    }
  };

  return (
    <div className="home">
      <div className="content">
        <br />
        <h1>Welcome to DIY Crafts Store</h1>
        <br />
        <br />
        <div className="intro-section">
          <img src={stockImage} alt="DIY Crafts" className="intro-image" />
          <div className="intro-text">
            <br /><br />
            <h2>DIY CRAFTS !</h2>
            <h2>We are a vibrant and dynamic creative hub dedicated to nurturing the artistic spirits around the world. Creativity is a vital part of a person's development, and we strive to provide engaging and inspiring resources to fuel your imaginations! At DIY CRAFT STORE, we offer a wide range of tutorials and video lessons that cover various crafting techniques, from simple projects to more complex creations.</h2> 
            <h2>Our goal is to provide you with the skills and knowledge you need to create beautiful and functional items, all while having fun and expressing your creativity. Each tutorial is carefully curated to ensure that it is easy to follow, informative, and engaging, making it accessible for crafters of all levels.</h2>
            <button className="learn-more-button"><a href="/aboutus">Learn More</a></button>
          </div>
        </div>
      </div>
      <div className="explore">
        <br />
        <hr />
        <h1>Explore Crafts</h1>
        <br />
        <button onClick={handleCraftsLinkClick} className="crafts-link">Crafts and DIY</button>
        <br />
        <br />
        {showCraftCategories && (
          <div className="craft-buttons">
            <button className="craft-button" onClick={() => handleCategoryClick('Kids Craft')}>Kids Craft</button>
            <button className="craft-button" onClick={() => handleCategoryClick('Home Craft')}>Home Craft</button>
            <button className="craft-button" onClick={() => handleCategoryClick('Paper Craft')}>Paper Craft</button>
            <button className="craft-button" onClick={() => handleCategoryClick('Wedding Craft')}>Wedding Craft</button>
          </div>
        )}
        {activeCategory && (
          <div ref={categoryRef} className="tutorial-gallery">
            {categories[activeCategory].map(tutorial => (
              <a href={tutorial.link} target="_blank" rel="noopener noreferrer" className="video-card" key={tutorial.title}>
                <img src={tutorial.image} alt={tutorial.title} />
                <h3>{tutorial.title}</h3>
              </a>
            ))}
          </div>
        )}
      </div>
      <footer className="footer">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
