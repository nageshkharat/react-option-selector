import React, { useState } from 'react';
import './OptionsSelector.css'; // Import the CSS for styling

const OptionsSelector = () => {
  const [selectedOptions, setSelectedOptions] = useState([]); // Array to keep track of selected options

  const options = [
    { id: 'cgpa', label: '9.0+ CGPA' },
    { id: 'attendance', label: '75% Attendance' },
    { id: 'fun', label: 'Fun' },
  ];

  const memes = [
    { id: 1, text: "When your code works on your machine but breaks in production...", img: '/image/meme1.jpg' },
    { id: 2, text: "Trying to fix bugs on Friday be like...", img: '/image/meme2.jpeg' },
    { id: 3, text: "When the intern accidentally drops the production database", img: '/image/meme3.png' },
  ];

  const handleSelect = (id) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter(option => option !== id));
    } else if (selectedOptions.length < 2) {
      setSelectedOptions([...selectedOptions, id]);
    } else {
      setSelectedOptions([id]);
    }
  };

  return (
    <div className="options-container">
      <h1 className="title">Engineering Students Life 🥹</h1>
      <div className="options">
        {options.map((option) => (
          <button
            key={option.id}
            className={`option ${selectedOptions.includes(option.id) ? 'selected' : ''}`}
            onClick={() => handleSelect(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="memes-section">
        <h2>Just after Graduation..</h2>
        <div className="memes">
          {memes.map((meme) => (
            <div key={meme.id} className="meme">
              <p>{meme.text}</p>
              <img src={meme.img} alt={meme.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionsSelector;
