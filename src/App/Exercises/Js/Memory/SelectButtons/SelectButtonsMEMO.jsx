import './styles.css';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const SelectButtonsMemo = (props) => {
  const { options, setValue } = props;
  const [newOptions, setNewOptions] = useState(options);

  // newOptions to wybrana przez "setNewOptions" która jest naszym wyborem(kliknięciem)

  const handleClick = (value) => {
    setValue(value);
    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value ? true : false,
        };
      })
    );
  };
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
