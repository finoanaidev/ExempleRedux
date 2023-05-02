import store from './store'
import {Provider} from 'react-redux'
import Container from './counter/container'
const App = () => (
  <Provider store={store}>
       <Container/>
  </Provider>
)
export default App