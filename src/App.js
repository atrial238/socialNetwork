 import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';


function App({state}) {
	return (
		<Router>
			<div className='app_wrapper'>
				<Header/>
				<Sidebar state={state.sidebar}/>
				<Content 
					className='app_wrapper_content' 
					content={state.content}
					state={state}
				/>
			</div>
		</Router>
	)
}

export default App;