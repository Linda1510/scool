import IconNotification from "./../assets/icons/download";
const Input = () => {
  return (
    <div className="input__wrapper">
      <div className="input__icon">
        <IconNotification />
      </div>
      <input className="input" type="text" />
    </div>
  );
};
export default Input;
