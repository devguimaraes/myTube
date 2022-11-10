/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import { useFiltroContext } from '../../Context/Filtro';
import { StyledTimeline } from '../StyledTimeline/StyledTimeline';

export function Timeline(props) {
	const playlistNames = Object.keys(props.playlists);
	const { filtroVideos } = useFiltroContext();
	let countVideos = 0;

	return (
		<StyledTimeline>
			{playlistNames.map((namePlaylist, index) => {
				const videos = props.playlists[namePlaylist];

				return (
					<section key={index}>
						<h2>{namePlaylist}</h2>
						<div>
							{videos
								.filter((videosDoArray) => {
									const titleNormalized = videosDoArray.title.toLowerCase();
									const filtroNormalized = filtroVideos?.toLowerCase();

									return titleNormalized.includes(filtroNormalized);
								})
								.map((video, index2) => {
									countVideos += 1;
									return (
										<a
											key={index2}
											href={video.url}
											target="_blank"
											rel="noreferrer"
										>
											<img src={video.thumb} alt={video.title} />
											<span>{video.title}</span>
										</a>
									);
								})}

							{countVideos === 0 ? 'Nenhum Vídeo encontrado' : null}
						</div>
					</section>
				);
			})}
		</StyledTimeline>
	);
}

export default Timeline;
