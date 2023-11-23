import {useRef, useContext, createContext} from 'react'

const InstaShareContext = createContext()

const InstaShareContextProvider = ({children}) => {
  const searchRef = useRef()
  //   const [searchValue, setSearchValue] = useState('')

  return (
    <InstaShareContext.Provider
      value={{
        searchRef,
      }}
    >
      {children}
    </InstaShareContext.Provider>
  )
}

function useInstaShareContext() {
  const context = useContext(InstaShareContext)
  if (context === undefined) {
    throw new Error('Context was used outside the Context Provider.')
  }
  return context
}

// export custom context hook and context provider
export {useInstaShareContext, InstaShareContextProvider}
