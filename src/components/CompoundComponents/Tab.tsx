interface TabProps {
  label: string;
  children: React.ReactNode;
}

const Tab = ( {children, label} : TabProps ) => {
  return (
    <>
      <em>{label}</em>
      <span>
        {children}
      </span>
    </>
  );
};

export default Tab;
