import styles from "../styles/Login.module.css";

const ForgotPassword = () => {
  return (
    <div>
      <div>
        <a href="/login">{"<"} Back</a>
      </div>
      <div className="sec1">
        <h1>Forgot your Password</h1>
        <h6>
          Enter your email address, and we’ll send you an email with all the
          instructions.
        </h6>
        <h6>Email</h6>
        <input type="text" />
        <button>Send me instructions</button>
        <p>
          <a href="£">Cancel</a>
        </p>
      </div>
      <div className="sec2">
        <h1>Check your email</h1>
        <h6>We sent a password reset link to bingwen@hotmail.com</h6>
        <h6>
          Didn’t receive the email? <a href="">Click to resend</a>
        </h6>
      </div>
      <div className="sec3">
        <h1>Set new password</h1>
        <h6>
          Your new password must be different from previous used passwords.
        </h6>
        <h6>Password</h6>
        <input type="password" placeholder="" />
        <h6>Minimum 8 characters with at least 1 number</h6>
        <h6>Password</h6>
        <input type="password" placeholder="" />
        <h6>Both password must match.</h6>
        <button type="submit">Reset password</button>
        <a href="#">Cancel</a>
      </div>
      <div className="sec4">
        <h1>Password reset</h1>
        <h6>
          Your password has been successfully reset. Click below to log in
          magically
        </h6>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
