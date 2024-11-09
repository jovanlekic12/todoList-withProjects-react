function Input(props) {
  const { placeHolder, className, onChange, type } = { props };
  return (
    <input
      type={type}
      className={className}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
}
export default Input;
