import './styles.css';

export const Button = ({ onClick, children, isDisabled, isActive, id }) => {
  const activeClass = isActive ? 'button-active' : '';

  return (
    <button
      className={`button ${activeClass}`}
      onClick={onClick}
      disabled={isDisabled}
      isActive={isActive}
    >
      {children}
    </button>
  );
};
