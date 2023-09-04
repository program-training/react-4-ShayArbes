

import { useContext } from 'react';
import { TextContext } from './textContext';

export const Child: React.FC = () => {
  const { text } = useContext(TextContext);
  
  return <div>{text}</div>;
};