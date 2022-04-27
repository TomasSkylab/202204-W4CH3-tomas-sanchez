const KeyComponent = ({ action, className, text }) => {
  return (
    <li>
      <button onClick={action} className={className}>
        {text}
      </button>
    </li>
  );
};

export default KeyComponent;
