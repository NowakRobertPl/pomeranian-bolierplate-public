import './styles.css';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const SelectButtons = (props) => {
  // props.options
  const { options } = props;

  const [newOptions, setNewOptions] = useState(options);

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
      {newOptions.map(({ label, isActive, value }) => (
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
