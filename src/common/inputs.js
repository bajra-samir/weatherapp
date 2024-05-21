export const Input = (props) => {
  const { name, label, value, onChange, wrapperStyle, textStyle, ...rest } =
    props;

  return (
    <div className={`input-wrapper ${wrapperStyle ?? ""}`}>
      {label ? <label className="label">{label}</label> : null}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className={`p-1.5 outline-none ${
          textStyle ?? ""
        } placeholder:text-[rgb(236, 236, 236)]  `}
        {...rest}
      />
    </div>
  );
};
