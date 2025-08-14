import { useRef, useState } from "react";
import "../Style/ComStyle/FormLogSig.css";

type SignUpFormProps = {
  onGoToLogin: () => void;
};

interface signUpDataType {
  userName: string;
  Email: string;
  password: string;
}
export default function SignUpForm({ onGoToLogin }: SignUpFormProps) {
  const [sigData, setSigData] = useState<signUpDataType>({
    userName: "",
    Email: "",
    password: "",
  });

  const userNameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleChang = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSigData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userName = sigData.userName;
    const Email = sigData.Email;
    const password = sigData.password;

    if (!userName.trim() || !Email.trim() || !password.trim()) {
      alert("Error!");
      return;
    }

    if (userNameRef.current) userNameRef.current.value = "";
    if (EmailRef.current) EmailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";

    setSigData({
      userName: "",
      Email: "",
      password: "",
    });
  };

  return (
    <form className="login-form"  onSubmit={handleSubmit}>
      <div className="field-column">
        <label className="label-email">Name </label>
      </div>
      <div className="field-input">
        <svg
          height="60"
          viewBox="0 -9 32 32"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_3" data-name="Layer 3">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></path>
          </g>
        </svg>
        <input
          type="text"
          className="input-email"
          placeholder="Enter your Name"
          name="userName"
          value={sigData.userName}
          onChange={handleChang}
          ref={userNameRef}
        />
      </div>
      <div className="field-column">
        <label className="label-email">Email </label>
      </div>
      <div className="field-input">
        <svg
          height="20"
          viewBox="0 0 32 32"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_3" data-name="Layer 3">
            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
          </g>
        </svg>
        <input
          type="text"
          className="input-email"
          placeholder="Enter your Email"
          name="Email"
          value={sigData.Email}
          onChange={handleChang}
          ref={EmailRef}
        />
      </div>
      <div className="flex-column">
        <label>Password </label>
      </div>
      <div className="field-input">
        <svg
          height="20"
          viewBox="-64 0 512 512"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm0 472c-119.103 0-216-96.897-216-216S136.897 40 256 40s216 96.897 216 216-96.897 216-216 216zm0-392c-97.047 0-176 78.953-176 176s78.953 176 176 176 176-78.953 176-176-78.953-176-176-176zm0 320c-79.529 0-144-64.471-144-144s64.471-144 144-144 144 64.471 144 144-64.471 144-144 144z"/>
          </g>
        </svg>
        <input
          type="password"
          className="input-email"
          placeholder="Enter your Password"
          name="password"
          value={sigData.password}
          onChange={handleChang}
          ref={passwordRef}
        />
      </div>
      <button className="btn-submit" type="submit">
        Sign Up
      </button>
      <p className="text-center">
        Already have an account?{" "}
        <span className="link-text" onClick={onGoToLogin}>
          login
        </span>
      </p>
      <div className="flex-row">
        <button type="button" className="btn-google">
          <svg
            version="1.1"
            width="20"
            id="Layer_1"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
          >
            <path
              fill="#FBBB00"
              d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
        c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
        C103.821,274.792,107.225,292.797,113.47,309.408z"
            />
            <path
              fill="#518EF8"
              d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
        c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
        c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
            />
            <path
              fill="#28B446"
              d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
        c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
        c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
            />
            <path
              fill="#F14336"
              d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
        c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
        C318.115,0,375.068,22.126,419.404,58.936z"
            />
          </svg>
          Google
        </button>
        <button type="button" className="btn-apple">
          <svg height="20" width="20" id="Capa_1" viewBox="0 0 22.773 22.773">
            <g>
              <g>
                <path
                  d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
            c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"
                />
                <path
                  d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
            c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
            c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
            c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
            c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
            c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"
                />
              </g>
            </g>
          </svg>
          Apple
        </button>
      </div>
    </form>
  );
}
