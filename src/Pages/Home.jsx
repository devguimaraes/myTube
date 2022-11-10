import { Header } from '../Components/Header/Header';
import Menu from '../Components/Menu/Index';
import { Timeline } from '../Components/Timeline/TimeLine';
import config from '../../config.json';
import { CSSReset } from '../global';
import { Favorites } from '../Components/Favorites/Favorites';

export function Home() {
	return (
		<>
			<CSSReset />
			<Menu />
			<Header />
			<Timeline playlists={config.playlists} />
			<Favorites favoritos={config.favorites} />
		</>
	);
}

export default Home;
