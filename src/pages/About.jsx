import { Link } from "react-router-dom";
import Cards from "../components/Shared/Cards";

const About = () => {
  return (
    <div>
      <Cards>
        <div className = 'about'>About this is a Project</div>
        <p>This is a React app to leve feedback for a product or service </p>
        <p>Version:1.0.0 </p>

        <p>
          <Link to='/'>
            back to home
          </Link>
        </p>
      </Cards>
        
      
    </div>
  );
}

export default About;
