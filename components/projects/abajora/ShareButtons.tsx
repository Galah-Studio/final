import React from 'react';

// Define the type for the props
type ShareButtonsProps = {
  title: string;
  url: string;
  imageUrl: string;
};

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url, imageUrl }) => {
  return (
    <div className="flex space-x-4">
      <a
        href={`https://twitter.com/share?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/twitter-icon.svg" alt="Share on Twitter" />
      </a>
      <a
        href={`https://www.instagram.com/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/instagram-icon.svg" alt="Share on Instagram" />
      </a>
    </div>
  );
};

export default ShareButtons;
