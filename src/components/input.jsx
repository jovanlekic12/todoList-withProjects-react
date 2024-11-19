function Input(props) {
  const { placeHolder, className, onChange, type, value } = props;
  return (
    <input
      type={type}
      className={className}
      placeholder={placeHolder}
      onChange={onChange}
      checked={value}
      value={value}
    />
  );
}
export default Input;
