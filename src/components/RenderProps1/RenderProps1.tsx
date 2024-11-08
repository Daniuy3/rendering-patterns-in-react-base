interface ChildComponentProps {
  render: (name: string) => JSX.Element;
}

export const ChildComponent = ({render} : ChildComponentProps) => {
  const name = "Daniel Trinidad"
  return (
    <div>
    {
      render(name)
    }
    </div>
  );
};

export const ParentComponent = () => {
  return (
    <>
      <ChildComponent render={(name) => <h1>Hola {name}!</h1> }/>
    </>
  );
};
