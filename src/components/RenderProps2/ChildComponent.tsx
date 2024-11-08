interface ChildComponentProps {
  data: string[];
}


const ChildComponent = ({ data } : ChildComponentProps) => {
  return (
    <>
      {
        data.map((name, index) => (
          <li key={index}>{name}</li>
        ))
      }
    </>
  );
};

export default ChildComponent;
