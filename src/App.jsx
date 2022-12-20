import { Route, Routes } from 'react-router-dom';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Home from './pages/home/Home';
import Destination from './pages/destination/Destination';
import Crew from './pages/crew/Crew';
import Technology from './pages/technology/Technology';

function App() {
	return (
		<Wrapper>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='destination' element={<Destination />} />
				<Route path='crew' element={<Crew />} />
				<Route path='technology' element={<Technology />} />
			</Routes>
		</Wrapper>
	);
}

export default App;
