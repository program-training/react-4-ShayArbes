

import { Child } from './Child'; 
import TextContextProvider from "\./textContext";

export const Father: React.FC = () => {
  return (
    <TextContextProvider>
      <Child />
      
    </TextContextProvider>
  );
};