 import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';


function App({store, dispatch}) {
	return (
		<Router>
			<div className='app_wrapper'>
				<HeaderContainer/>
				<Sidebar store={store}/>
				<Content 
					className='app_wrapper_content' 
					store={store}
				/>
			</div>
		</Router>
	)
}

export default App;