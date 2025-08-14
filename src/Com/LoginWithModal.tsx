import { useState } from "react";
import LoginForm from "../Com/LoginForm";
import SignUpForm from "../Com/SignUpForm";

export default function LoginWithModal({ onClose }: { onClose: () => void }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        {showSignUp ? (
          <SignUpForm onGoToLogin={() => setShowSignUp(false)} />
        ) : (
          <LoginForm onOpenSignUp={() => setShowSignUp(true)} />
        )}
      </div>
    </div>
  );
}