import './App.css';
import './index.css'
import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Generate a unique identifier
    const uniqueId = generateUniqueId();
    // Shorten the URL using the unique identifier
    const shortenedUrl = `https://your-domain.com/${uniqueId}`;
    setShortUrl(shortenedUrl);
  };

  const generateUniqueId = () => {
    // Generate a random alphanumeric string for the unique identifier
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let uniqueId = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * alphanumeric.length);
      uniqueId += alphanumeric[randomIndex];
    }
    return uniqueId;
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Kutty URL</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
          placeholder="Enter URL"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-64 sm:w-80"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
        >
          Kutty-fy
        </button>
      </form>
      {shortUrl && (
        <div className="relative w-64 sm:w-80 mt-4">
          <input
            type="text"
            value={shortUrl}
            readOnly
            className="border border-gray-300 rounded-lg px-4 py-2 mb-2 w-full"
          />
          <button
            type="button"
            className="absolute top-0 right-0 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 mb-2"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
}

export default App;