import './styles.css';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const SelectButtons = (props) => {
  const { options } = props;

  const [newOptions, setNewOptions] = useState(options);
  // newOptions to wybrana przez "setNewOptions" która jest naszym wyborem(kliknięciem)

  function handleClick(value) {
    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value,
        };
      })
    );
  }

  return (
    <>
      {newOptions.map(({ label, value, isActive }) => (
        <Button
          key={value}
          onClick={() => handleClick(value)}
          isActive={isActive}
        >
          {label}
        </Button>
      ))}
    </>
  );
};