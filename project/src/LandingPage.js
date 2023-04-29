import { BrowserRouter, Route, Link } from 'react-router-dom';
import './style.css';

function LandingPage() {
  return (
    <div>
      <center>
        <h1>Welcome to Organ Donation System</h1>
      </center>
      <p>Please select whether you are a Needy or Donor:</p>
      <center><Link to="/login/needy">
        <button>Needy</button>
      </Link>
      <br></br>
      <Link to="/login/donor">
        <button>Donor</button>
      </Link>
      </center>
    </div>
  );
}

export default LandingPage;