import React, {createContext, useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  previousColors: ImageColors;
  setMainColors: (colores: ImageColors) => void;
  setPreviousMainColors: (colores: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps); // TODO: Definir tipo

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [previousColors, setPreviousColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colores: ImageColors) => {
    setColors(colores);
  };

  const setPreviousMainColors = (colores: ImageColors) => {
    setPreviousColors(colores);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        previousColors,
        setMainColors,
        setPreviousMainColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
