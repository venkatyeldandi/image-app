import React from 'react';
import { Link } from 'react-router-dom';
import './ImageLinksBar.css';

function ImageLinksBar(props) {
  const { handleLinkClick } = props;

  return (
    <div className='ImageLinksBar'>
      <Link to='/search/nature' onClick={(event) => handleLinkClick(event, 'nature')}>
        Nature
      </Link>
      <Link to='/search/food' onClick={(event) => handleLinkClick(event, 'food')}>
        Food
      </Link>
      <Link to='/search/animals' onClick={(event) => handleLinkClick(event, 'animals')}>
        Animals
      </Link>
      <Link to='/search/travel' onClick={(event) => handleLinkClick(event, 'travel')}>
        Travel
      </Link>
      <Link to='/search/sports' onClick={(event) => handleLinkClick(event, 'sports')}>
        Sports
      </Link>
      <Link to='/search/music' onClick={(event) => handleLinkClick(event, 'music')}>
        Music
      </Link>
      <Link to='/search/technology' onClick={(event) => handleLinkClick(event, 'technology')}>
        Technology
      </Link>
      <Link to='/search/fashion' onClick={(event) => handleLinkClick(event, 'fashion')}>
        Fashion
      </Link>
      <Link to='/search/health' onClick={(event) => handleLinkClick(event, 'health')}>
        Health
      </Link>
      <Link to='/search/business' onClick={(event) => handleLinkClick(event, 'business')}>
        Business
      </Link>
      <Link to='/search/people' onClick={(event) => handleLinkClick(event, 'people')}>
        People
      </Link>
      <Link to='/search/architecture' onClick={(event) => handleLinkClick(event, 'architecture')}>
        Architecture
      </Link>
      <Link to='/search/education' onClick={(event) => handleLinkClick(event, 'education')}>
        Education
      </Link>
      <Link to='/search/celebrities' onClick={(event) => handleLinkClick(event, 'celebrities')}>
        Celebrities
      </Link>
      <Link to='/search/science' onClick={(event) => handleLinkClick(event, 'science')}>
        Science
      </Link>
    </div>
  );
}

export default ImageLinksBar;