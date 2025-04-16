import { createContext, useContext, useState } from "react";
interface ToggleProps {
  children: React.ReactNode;
}
interface ToggleContextType {
  isOn: boolean;
  toggle: () => void;
}
// const ToggleContext = createContext<ToggleContextType>({} as ToggleContextType);
const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

const Toggle: React.FC<ToggleProps> & {
  ToggleButton: React.FC;
  ToggleStatus: React.FC;
} = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <ToggleContext.Provider value={{ isOn, toggle }}>
        {children}
      </ToggleContext.Provider>
    </div>
  );
};

const ToggleButton = () => {
  const context = useContext(ToggleContext);
  if (!context) throw new Error("Toggle Button doit être utilisé avec Toggle");
  return <button onClick={context.toggle}>Click</button>;
};
const ToggleStatus = () => {
  const context = useContext(ToggleContext);
  if (!context) throw new Error("Toggle Status doit être utilisé avec Toggle");

  return <p>{context.isOn ? "Allumé" : "Éteint"}</p>;
};

Toggle.ToggleButton = ToggleButton;
Toggle.ToggleStatus = ToggleStatus;

export default Toggle;
