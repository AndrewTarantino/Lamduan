import React, { useState } from 'react';
import './App.css';
import logo from './logo.png'; // Your logo
import TelegramIcon from './TelegramIcon.png'; // Import your custom icon
import XIcon from './Xicon.png'; // Import your custom icon
import DexscreenerIcon from './DexscreenerIcon.png'; // Import your custom icon

function App() {
  const [showWelcome, setShowWelcome] = useState(true); // State to control the welcome message

  const handleLearnMore = () => {
    setShowWelcome(false); // Hide the welcome message when the button is clicked
  };

  return (
    <div className="App">
      {showWelcome ? (
        <header className="App-header">
          <img src={logo} alt="Logo" className="logo" /> {/* Display the logo */}
          <p className="welcome-message">
            Welcome to Lamduan CTO: 6WSppYPevaDEZxdmW2WoHLoSnJMeVyqz8Rqkm8MCpump.
          </p>
          <button className="App-link" onClick={handleLearnMore}>
            Learn More about Lamduan!
          </button>
        </header>
      ) : (
        <>
          <div className="content">
            <p className="lamduan-title">Q: Who is Lamduan?</p>
            <div className="explanation">
              <p>Meet Lamduan, the newest addition to Sisaket Zoo, born on the very day of our launch, making her the ultimate Moo Deng! Just eight days old, she has already captured the hearts of many, becoming a sensational highlight in Thailand's wildlife scene!.</p>
            </div>
          </div>
          <div className="second-background">
            <div className="text-wrapper">
              <h2>Learn more about Lamduan's activities</h2>
              <p>Follow us for the latest updates!</p>
              <p>Share your thoughts and experiences with Lamduan!</p>
            </div>

            {/* Custom Social Icons at the bottom */}
            <div className="social-icons">
              <a href="https://t.me/lamduancommunity" target="_blank" rel="noopener noreferrer">
                <img src={TelegramIcon} alt="Telegram" className="social-icon" />
              </a>
              <a href="https://x.com/LAMDUAN_SOL" target="_blank" rel="noopener noreferrer">
                <img src={XIcon} alt="X" className="social-icon" />
              </a>
              <a href="https://dexscreener.com/solana/45dhcrrqspacpcrjnrj8nv2nrbksj9rzjze5llgccczw" target="_blank" rel="noopener noreferrer">
                <img src={DexscreenerIcon} alt="Dexscreener" className="social-icon" />
              </a>
            </div>
          </div>

        </>
      )}
    </div>
  );
}

export default App;
