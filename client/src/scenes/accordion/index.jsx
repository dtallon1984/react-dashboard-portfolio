import Accordion from "../../components/Accordion";

function AccordionDemo() {
  const items = [
    {
      id: "123",
      label: "Can I use react on a project?",
      content:
        "you can use React on any project you want. you can use React on any project you want. you can use React on any project you want.",
    },
    {
      id: "456",
      label: "Can I use Javascript on a project?",
      content:
        "you can use React on any project you want. you can use React on any project you want. you can use React on any project you want.",
    },
    {
      id: "789",
      label: "Can I use CSS on a project?",
      content:
        "you can use React on any project you want. you can use React on any project you want. you can use React on any project you want.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionDemo;
