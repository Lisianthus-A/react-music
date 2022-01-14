import './app.css';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './containers';
import process from 'process';

const isDev = process.env.NODE_ENV !== 'production';
const basename = isDev ? '/' : '/react-music';

function App() {
    return (
        <BrowserRouter basename={basename}>
            <AppContainer />
        </BrowserRouter>
    );
}

export default App;