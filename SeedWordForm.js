import React, { useState } from 'react';

const SeedWordForm = ({ onSubmit }) => {
  const [seedWord, setSeedWord] = useState('');

  const handleSeedWordChange = (event) => {
    setSeedWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(seedWord);
    setSeedWord(''); // 입력란 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="seedWord">씨드 단어:</label>
      <input
        type="text"
        id="seedWord"
        value={seedWord}
        onChange={handleSeedWordChange}
      />
      <button type="submit">제출</button>
    </form>
  );
};

export default SeedWordForm;
