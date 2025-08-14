import "../Style/ComStyle/LoginButton.css";
type LoginButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <button className="LOGINBTN" onClick={onClick}>
      <span className="span-mother">
        <span>L</span>
        <span>O</span>
        <span>G</span>
        <span>I</span>
        <span>N</span>
      </span>
      <span className="span-mother2">
        <span>L</span>
        <span>O</span>
        <span>G</span>
        <span>I</span>
        <span>N</span>
      </span>
    </button>
  );
}

export default LoginButton;
