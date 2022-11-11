/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import { useNavigate } from 'react-router-dom';
import { useFiltroContext } from '../../Context/Filtro';
import { StyledTimeline } from '../StyledTimeline/StyledTimeline';

export function Timeline(props) {
	const playlistNames = Object.keys(props.playlists);
	const { filtroVideos } = useFiltroContext();
	let countVideos = 0;
	const navigate = useNavigate();

	const redirecionaPageVideo = (video) => {
		navigate(`/videos/${video}`, {
			replace: false,
		});
	};

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
											onClick={() => {
												redirecionaPageVideo(video.id);
											}}
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
