import { Header } from '../Components/Header/Header';
import Menu from '../Components/Menu/Menu';
import { Timeline } from '../Components/Timeline/TimeLine';
import config from '../../config.json';
import { CSSReset } from '../global';

export function Home() {
	return (
		<>
			<CSSReset />
			<Menu />
			<Header />
			<Timeline playlists={config.playlists} />
		</>
	);
}

export default Home;
