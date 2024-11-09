import { useState } from "react";

function useLoading (initialValue: boolean) {
  const [isLoading, setIsLoading] =  useState(initialValue);
  const [isDisabled, setIsDisabled] =  useState(initialValue);

  const handleClick = () => {
    setIsLoading(true);
    setIsDisabled(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsDisabled(false);
    }, 2000);
  }

  return {
    isLoading,
    isDisabled,
    handleClick
  }
} 

const UserComponent = () => {

  const {isLoading, isDisabled, handleClick} = useLoading(false);
  
  

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={isDisabled}
      >
        Click
      </button>
      {
        isLoading ? <p>Loading...</p> : <p>Componente</p>
      }
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent />;
};
