 import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';


function App({store, dispatch}) {
	return (
		<Router>
			<div className='app_wrapper'>
				<Header/>
				<Sidebar store={store}/>
				<Content 
					className='app_wrapper_content' 
					store={store}
					dispatch={dispatch}
				/>
			</div>
		</Router>
	)
}

export default App;