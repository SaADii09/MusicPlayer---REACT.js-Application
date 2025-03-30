import './index.css';
import { SideBar } from './components';
import {Home} from "./pages"

function App() {
    return (
        <div className="flex flex-row">
            <SideBar />
            <Home />
        </div>
    );
}

export default App;
