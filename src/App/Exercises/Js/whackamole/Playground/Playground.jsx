import './styles.css';
import { ReactComponent as Mole } from '../../../../Images/Group 14.svg';
export const Playground = () => {
  return (
    <div className="playground">
      <div className="field"></div>
      <div className="field">
        <Mole className="Mole" />
      </div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
    </div>
  );
};
