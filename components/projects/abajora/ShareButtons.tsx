import React from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
  imageUrl: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url, imageUrl }) => {
  return (
    <div className="flex space-x-4 mt-4">
      <a
        href={`https://twitter.com/share?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
      >
        <img src="/path/to/twitter-icon.svg" alt="Twitter" className="w-8 h-8" />
      </a>
      <a
        href={`https://www.instagram.com/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
      >
        <img src="/path/to/instagram-icon.svg" alt="Instagram" className="w-8 h-8" />
      </a>
    </div>
  );
};

export default ShareButtons;
