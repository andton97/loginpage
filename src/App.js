import './App.css';

function App() {
  return (
    <div className = "container">
      <div className = "login">
          <div className='login__form'>
            <form class="form">
            <div className='form__mail'>
              <input className='form__input' type='text' placeholder='username'/>
            </div>
            <div className='form__password'>
              <input class="form__input" type="password" placeholder='password'/>
            </div>
            <div className='form__element'>
              <button className='form__btn' type='submit'>
                <span className='form__btn--text'>Login</span>
              </button>
            </div>
            <div className='form__element'>
              <p className='form__message'>Not registered? Create an account</p>
            </div>

          </form>
            
          </div>
      </div>
    </div>
  );
}

export default App;
