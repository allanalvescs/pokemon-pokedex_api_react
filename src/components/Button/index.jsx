function Button({ func, children }) {
  return <button onClick={() => func()}>{children}</button>;
}

export default Button;
