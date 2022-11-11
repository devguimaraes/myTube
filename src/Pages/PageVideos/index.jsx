/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { useParams } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../../Components/Menu/Index';
import config from '../../../config.json';

export const DivVideos = styled.div`
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-items: center;
	justify-content: space-around;
	align-items: center;

	div {
		padding-top: 200px;
		width: 92%;
		text-align: center;
		margin: 0 auto;
	}

	iframe {
		width: 100%;
		min-height: 500px;
	}

	h2 {
		padding-top: 16px;
		text-align: center;
	}
`;

export function Videos() {
	const [videoJogos, setvideoJogos] = useState({});
	const [videoFront, setvVideoFront] = useState({});
	const [videoBack, setVideoBack] = useState({});

	const { id } = useParams();
	const idNumber = Number(id);

	useEffect(() => {
		const resultado = config.playlists;

		const joguinhos = resultado.jogos.find((item) => item.id === idNumber);
		setvideoJogos(joguinhos);

		const front = resultado.frontEnd.find((item) => item.id === idNumber);
		setvVideoFront(front);

		const back = resultado.backEnd.find((item) => item.id === idNumber);
		setVideoBack(back);
	}, [videoJogos, videoFront, videoBack]);

	return (
		<>
			<Menu />
			<DivVideos>
				{videoJogos && (
					<div>
						<iframe
							src={videoJogos.url}
							title="Iframe Example"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
						<h2>{videoJogos.title}</h2>
					</div>
				)}
				{videoFront && (
					<div>
						<iframe
							src={videoFront.url}
							title="Iframe Example"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
						<h2>{videoFront.title}</h2>
					</div>
				)}
				{videoBack && (
					<div>
						<iframe
							src={videoBack.url}
							title="Iframe Example"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
						<h2>{videoBack.title}</h2>
					</div>
				)}
			</DivVideos>
		</>
	);
}

export default Videos;
