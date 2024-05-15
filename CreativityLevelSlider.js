const CreativityLevelSlider = ({ label, value, onChange }) => {
  const handlesliderChange = (e) => {
    const parsedValue = parseInt(e.target.value);
    onChange(parsedValue);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type="range"
        min={1}
        max={3}
        step={1}
        value={value}
        onChange={handlesliderChange}
      />
      <p>
        {value === 1 ? '직관적' : value === 2 ? '중간' : '독창적'}
      </p>
    </div>
  );
};

export default CreativityLevelSlider;
