import './app.css';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './containers';

function App() {
    return (
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    );
}

export default App;