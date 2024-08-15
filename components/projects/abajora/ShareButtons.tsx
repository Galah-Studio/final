import { FaTwitter, FaInstagram } from 'react-icons/fa';

type ShareButtonsProps = {
  title: string;
  url: string;
  imageUrl: string;
};

const ShareButtons = ({ title, url, imageUrl }: ShareButtonsProps) => {
  const tweetText = encodeURIComponent(`${title} ${url}`);
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${imageUrl}`;

  return (
    <div className="flex gap-4">
      <a
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
      >
        <FaTwitter size={24} />
      </a>

      <a
        href={`https://www.instagram.com/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default ShareButtons;
