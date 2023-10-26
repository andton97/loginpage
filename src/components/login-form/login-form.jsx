const LoginForm = () => {
  return (
    <div className="login-card">
      <div className="login-card__container">
        <form className="login-card__container__form">
          <h1 className="login-card__container__form__h1">Sign In</h1>
          <div className="login-card__container__form__mail">
            <input
              className="login-card__container__form__mail__input"
              type="text"
              placeholder="username"
            />
          </div>
          <div className="login-card__container__form__password">
            <input
              className="login-card__container__form__password__input"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="login-card__container__form__element">
            <button
              className="login-card__container__form__element__btn"
              type="submit"
            >
              <span className="login-card__container__form__element__btn__text">
                Login
              </span>
            </button>
          </div>
          <div className="login-card__container__form__element">
            <p className="login-card__container__form__element__message">
              Not registered? Create an account
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
