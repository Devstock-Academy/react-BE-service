import { Header, List } from './components'
import { LoginProvider } from './context/LoginContext'

function App() {
  return (
    <>
      <LoginProvider>
        <Header>Budget tracker</Header>
        <List />
      </LoginProvider>
    </>
  )
}

export default App
