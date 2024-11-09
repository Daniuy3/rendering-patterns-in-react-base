import { useRef } from "react";

export const UncontrolledInput = () => {

  const ref = useRef<HTMLInputElement>(null);

  const handleSubit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
      console.log(ref.current?.value);
    
  }

  return (
    <div>
      <form onSubmit={handleSubit}>
        <input type="text" placeholder="Type here..." ref={ref}/>
        <button type="submit">Click</button>
      </form>
    </div>
  );
};
