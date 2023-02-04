import logo from '../../images/logo.avif';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Oups cette page display error page
        </p>
        Home
      </header>
    </div>
  );
}

export default ErrorPage;
