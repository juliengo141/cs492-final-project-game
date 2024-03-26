import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="HomePage">
        <img className='homePage-HeaderImg' src="../../assets/DALL·E 2024-03-24 22.55.47 - In a spacious, well-lit conference room within a modern office, a team of human HR professionals is seated around a large table, engaging in the selec.webp" alt="AI ethics" height="400"/>
      <div className='homePage-TextContainer'>
        <h2>Welcome to a world where technology shapes our choices!</h2>
        <p className='homwPage-text'>

          AI is changing the game of recruitment and streamlining the hiring process. These algorithms promise efficiency but also raise questions of biases, discrimination, and data privacy.
          <br></br>  
          <br></br>
          Are you ready to step into the role of HR leader, and ensure fairness prevails in this high-tech hiring landscape?
          <br></br>
          <br></br>
          This interactive simulation will guide you through real-world scenarios, teaching you the hidden biases in hiring and see if you can build a truly fair workplace.
          Let's explore the power and pitfalls of using AI in hiring. Discover how it can help -and sometimes hinder- finding the best people.  
          <br></br>
          <h3>Ready to play?</h3>
          <button><Link to="/startGame">Start Game</Link></button>
        </p>
      </div>
    </div>
  );
}

export default HomePage;
