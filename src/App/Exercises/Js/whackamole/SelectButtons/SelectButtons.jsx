import './styles.css';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const SelectButtons = (props) => {
  const { options, setOptionChosen, setInitialTime } = props;
  const [newOptions, setNewOptions] = useState(options);

  // newOptions to wybrana przez "setNewOptions" która jest naszym wyborem(kliknięciem)

  function handleClick(value) {
    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value ? true : false,
        };
      })
    );

    const chosenOption = newOptions.find((option) => option.value === value);

    setOptionChosen(chosenOption.value * 60);
    setInitialTime(chosenOption.value * 60);
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
