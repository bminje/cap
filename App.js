import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import CreativityLevelSlider from './CreativityLevelSlider';
import SeedWordForm from './SeedWordForm'; // SeedWordForm 추가
import './App.css';

const App = () => {
  const [creativityLevel, setCreativityLevel] = useState(2);
  const [seedWord, setSeedWord] = useState('');

  const handleSliderChange = (newValue) => {
    setCreativityLevel(newValue);
  };

  const handleSeedWordSubmit = (submittedSeedWord) => {
    setSeedWord(submittedSeedWord);
  };

  return (
    <div className="App">
      <h1>프론트엔드 요소 예제</h1>
      <ul>
        <li className="no-dot">
          <option></option>
        </li>
        <li>
          <option>여기에 뭔가를 넣어보자.</option>
        </li>
      </ul>
      <DropdownMenu />
      <CreativityLevelSlider
        label="독창성 레벨"
        value={creativityLevel}
        onChange={handleSliderChange}
      />
      <SeedWordForm onSubmit={handleSeedWordSubmit} /> {/* SeedWordForm 추가 */}
      <p>씨드 단어: {seedWord}</p> {/* 입력된 씨드 단어 표시 */}
    </div>
  );
};

export default App;
