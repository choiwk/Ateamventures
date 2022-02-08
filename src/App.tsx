import 'styles/App.css';
import Nav from 'components/Navbar/Nav';
import Header from './components/Header/Header';
import Filter from 'components/Filtering/Filter';
import RequestCard from 'components/Requestcard/RequestCard';

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <Header />
            <Filter />
            <RequestCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
