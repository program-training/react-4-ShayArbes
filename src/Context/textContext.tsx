
import { createContext,useState } from 'react';

interface UserContextProviderProps {
    children: React.ReactNode;
    }

    interface TextContextType {
        text: string;
        setText: (text: string) => void; 
      }

export const TextContext = createContext<TextContextType>({
  text: 'hello world',
  setText: () => {}
  
});

export const textContext: React.FC<UserContextProviderProps> = (props) => {
    const [text, setText] = useState('hello world');

    return (
        <div className='container'>
        <TextContext.Provider value={{text, setText}}>
          {props.children}
          <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
        </TextContext.Provider>
        </div>
      )
    };

export default textContext

