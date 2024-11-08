/* 
   En este patron de renderizado el componente padre tiene el control total sobre la renderizacion del hijo.

*/

import { useState } from "react";

interface ToggleButtonProps {
  onToggle: (value: boolean) => void;
  isToggled: boolean;
}

/* 
  Este es el componente hijo, conforme a las propiedades que recibe, se renderiza de una forma u otra.
*/
                        /* ↓ La bandera que indica si se renderiza de una forma u otra */
const ToggleButton = ({ isToggled, onToggle} : ToggleButtonProps) => {
                                /*  ↑ La funcion que debe ejecutar            */
  
  const handleToggle = () => {
    onToggle(!isToggled);
  };

  return (
    <button onClick={handleToggle}>
      {isToggled ? 'ON' : 'OFF'}
    </button>
  );
}

/* Este es el componente padre quien pasa las propiedades que manejan el renderizado */
export const ParentComponent = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <p>State: {isToggled? "ON" : "OFF"} </p>
      <ToggleButton onToggle={setIsToggled} isToggled={isToggled} />
    </div>
  );
};
