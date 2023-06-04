import './styles.css';
import { ReactComponent as Mole } from '../../../../Images/Group 14.svg';
import { useState } from 'react';
import { useEffect } from 'react';

const fields = [
  {
    id: 1,
    hasClicked: false,
  },
  {
    id: 2,
    hasClicked: false,
  },
  {
    id: 3,
    hasClicked: false,
  },
  {
    id: 4,
    hasClicked: false,
  },
  {
    id: 5,
    hasClicked: false,
  },
  {
    id: 6,
    hasClicked: false,
  },
  {
    id: 7,
    hasClicked: false,
  },
  {
    id: 8,
    hasClicked: false,
  },
  {
    id: 9,
    hasClicked: false,
  },
  {
    id: 10,
    hasClicked: false,
  },
];

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

export const Playground = ({ score, setScore }) => {
  const [modifiedFields, setModifiedFields] = useState(fields);
  const [fieldWithMoleId, setFieldWithMoleId] = useState(getRandomInt(10));

  const resetClickFlags = () => {
    setTimeout(() => {
      setModifiedFields(
        modifiedFields.map((field) => {
          return {
            ...field,
            hasClicked: false,
          };
        })
      );
    }, 300);
  };

  const handleScoreUpdate = (isMolePresent) => {
    isMolePresent ? setScore(score + 1) : setScore(score - 1);
  };

  const handleClick = (clickedField, isMolePresent) => {
    setModifiedFields(
      modifiedFields.map((field) => {
        return { ...field, hasClicked: field.id === clickedField.id };
      })
    );
    resetClickFlags();
    handleScoreUpdate(isMolePresent);
  };

  useEffect(() => {
    setInterval(() => {
      setFieldWithMoleId(getRandomInt(10));
    }, 1000);
  }, []);

  return (
    <div className="playground">
      {modifiedFields.map((field) => {
        const isMolePresent = field.id === fieldWithMoleId;

        const isClickedFieldWithMole =
          isMolePresent && field.hasClicked ? 'field-green' : '';
        const isClickedFieldWithoutMole =
          !isMolePresent && field.hasClicked ? 'field-red' : '';

        return (
          <div
            className={`field ${isClickedFieldWithMole} ${isClickedFieldWithoutMole}`}
            key={field.id}
            onClick={() => handleClick(field, isMolePresent)}
          >
            {isMolePresent && <Mole className="Mole" />}
          </div>
        );
      })}
    </div>
  );
};

{
  /* return (
 <div className="playground">
     <div1 className="field"></div1>
     <div2 className="field">
       <Mole className="Mole" />
     </div2>
     <div3 className="field"></div3>     
     <div4 className="field"></div4>
     <div5 className="field"></div5>
     <div6 className="field"></div6>
     <div7 className="field"></div7>
     <div8 className="field"></div8>
     <div9 className="field"></div9>
     <div10 className="field"></div10>
   </div>
   );
}; */
}
