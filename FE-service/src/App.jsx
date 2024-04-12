import { Header, List } from './components'
import { LoginProvider } from './context/LoginContext'

function App() {
  return (
    <>
      <LoginProvider>
        <Header>Budget tracker</Header>
        <List />
        <footer>Budget tracker ©</footer>
      </LoginProvider>
    </>
  )
}

export default App
