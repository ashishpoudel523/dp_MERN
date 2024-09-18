const Button = (MyBtn) => {
  return (
    <button style={{ backgroundColor: "blue", color: "white" }}>
      {MyBtn.text}
    </button>
  );
};

export default Button;
