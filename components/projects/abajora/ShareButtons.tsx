import React from 'react';

const ShareButtons = ({ title, url, imageUrl }) => {
  return (
    <div className="flex space-x-4 mt-8">
      <a href={`https://twitter.com/share?url=${url}&text=${title}`} target="_blank" rel="noopener noreferrer">
        <img src="/icons/twitter-icon.svg" alt="Share on Twitter" className="w-8 h-8" />
      </a>
      <a href={`https://www.instagram.com/?url=${url}`} target="_blank" rel="noopener noreferrer">
        <img src="/icons/instagram-icon.svg" alt="Share on Instagram" className="w-8 h-8" />
      </a>
    </div>
  );
};

export default ShareButtons;
