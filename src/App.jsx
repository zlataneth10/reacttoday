import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Header from "./Header";
import Navbar from './Navbar';
import Cards from './Cards';
import Recap from './Recap';

//normal
function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <Cards />
        <Recap />
      </Container>
    </>
  )
}

export default App;