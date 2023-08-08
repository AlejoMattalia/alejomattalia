import { createContext, useState } from "react";

export const ProgressBarContext = createContext();

export function ProgressBarContextProvider({ children }) {
  const [firstHistory, setFirstHistory] = useState(false);
  const [secondHistory, setSecondHistory] = useState(false);
  const [thirdHistory, setThirdHistory] = useState(false);

  const data = {
    firstHistory,
    setFirstHistory,
    secondHistory,
    setSecondHistory,
    thirdHistory,
    setThirdHistory,
  };

  return (
    <ProgressBarContext.Provider value={data}>
      {children}
    </ProgressBarContext.Provider>
  );
}
