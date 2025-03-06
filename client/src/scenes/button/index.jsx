import Button from "../../components/Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

function ButtonDemo() {
  const handleClick = () => {
    console.log("click!");
  };
  return (
    <div>
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
  );
}

export default ButtonDemo;
