import './styles.css';
import { ReactComponent as Mole } from '../../../../Images/Group 14.svg';
import { WhereIsMole } from '../WhereIsMole/WhereIsMole';

export const Playground = () => {
  return (
    <>
      <div className="playground">
        <WhereIsMole
          options={[
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
            { value: 7 },
            { value: 8 },
            { value: 9 },
            { value: 10 },
          ]}
        />
      </div>
    </>
  );
};
