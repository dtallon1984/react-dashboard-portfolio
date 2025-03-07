import Button from "../../components/Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

function ButtonDemo() {
  const handleClick = () => {
    console.log("click!");
  };
  const containerStyle = {
    position: 'relative', // Needed for absolute positioning of child
    height: '25vh',
    width: '25vw'
  };
  
  const contentStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)', // Centers the element
     width: '200px',
    height: '100px',
    //backgroundColor: '#f0f0f0',
    //border: '1px solid #ccc',
    //textAlign: 'center'
  };
  return (

    <div style={containerStyle} > 
    <div style={contentStyle} >
      <h1>Buttons</h1>
      <div>
        <Button onClick={handleClick}>Plain</Button>
      </div>
      <div>
        <Button primary rounded>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloud />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          Success
        </Button>
      </div>
      <div>
        <Button warning outline>
          Warning
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Danger
        </Button>
      </div>
      </div>
    </div>
  );
}

export default ButtonDemo;
