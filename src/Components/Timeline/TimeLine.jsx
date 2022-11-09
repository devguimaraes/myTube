/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import { StyledTimeline } from '../StyledTimeline/StyledTimeline';

export function Timeline(props) {
	const playlistNames = Object.keys(props.playlists);

	return (
		<StyledTimeline>
			{playlistNames.map((namePlaylist, index) => {
				const videos = props.playlists[namePlaylist];

				return (
					<section key={index}>
						<h2>{namePlaylist}</h2>
						<div>
							{videos.map((video, index2) => {
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
						</div>
					</section>
				);
			})}
		</StyledTimeline>
	);
}

export default Timeline;
