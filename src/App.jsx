import { Container } from 'react-bootstrap';
import CardBox from './CardBox';
import CardVoid from './CardVoid';

function App() {


  return (
    <Container className='mt-4' >
      <CardBox />
      <CardVoid />
    </Container>
  )
}

export default App
