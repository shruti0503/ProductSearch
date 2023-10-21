import { createContext, useState, useContext } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [Text, setText] = useState(''); // Initial text value

  return (
    <DataContext.Provider value={{ Text, setText }}> {/* Include the 'setText' function */}
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
