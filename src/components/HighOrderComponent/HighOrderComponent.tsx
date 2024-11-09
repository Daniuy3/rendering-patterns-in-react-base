import { useState } from "react";

interface Props {
  Component : React.ComponentType;
  isLoading : boolean;
}
function withLoader ({Component, isLoading} : Props) {
  return () => {
    return isLoading ? <div>Loading...</div> : <Component />;
  }
}


export const ParentComponent = () => {
  const [isLoading, setIsLoading] =  useState(false);
  const [isDisabled, setIsDisabled] =  useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setIsDisabled(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsDisabled(false);
    }, 2000);
  }
  return (
    <div>
      <button
        onClick={handleClick}
        disabled={isDisabled}
      >
        Click
      </button>
      {
        withLoader({Component: () => <p>Componente</p>, isLoading})()
      }
    </div>
  );
};
