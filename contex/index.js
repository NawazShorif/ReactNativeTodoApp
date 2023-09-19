import React, { useState } from "react";

const defultVal = {
  isAuthorize: false,
  isLoading: true,
  setIsLoading: (val) => { },
  setIsAuthorize: (val) => { },
  todoList: [],
  setTodoList: (val) => { }
}

export const AppContext = React.createContext(defultVal);

const AppContextComp = (props) => {
  const [isLoading, setIsLoading] = useState([])
  const [isAuthorize, setIsAuthorize] = useState(false)
  const [todoList, setTodoList] = useState([])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading: (val) => { setIsLoading(val) },
        todoList,
        setTodoList: (val) => { setTodoList(val) },
        isAuthorize,
        setIsAuthorize: (val) => { setIsAuthorize(val) }
      }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextComp;
