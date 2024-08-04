import './App.css';
import Header from './components/Header'
import Achievements from './components/Achievements'
import Services from './components/Services';
import Conditions from './components/Conditions'
import Gallery from './components/Media'
import Contacts from './components/Contacts'

function App() {
    return (
        <div className="App">
            <Header/>
            <Achievements/>
            <Services/>
            <Conditions/>
            <Gallery/>
            <Contacts/>
        </div>
    );
}

export default App;
