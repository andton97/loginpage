const LoginForm = () => {
  return (
    <div className="login-card">
      <div className="login-card__form">
        <form className="form">
          <div className="form__mail">
            <input className="form__input" type="text" placeholder="username" />
          </div>
          <div className="form__password">
            <input
              className="form__input"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="form__element">
            <button className="form__btn" type="submit">
              <span className="form__btn--text">Login</span>
            </button>
          </div>
          <div className="form__element">
            <p className="form__message">Not registered? Create an account</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
