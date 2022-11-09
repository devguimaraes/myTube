/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import { StyledTimeline } from '../StyledTimeline/StyledTimeline';

const DivFavoritos = styled.div`
	display: flex;
	flex-wrap: wrap;
	overflow-x: scroll;

	img {
		width: 100px;
		height: 110px;
		border-radius: 50%;
	}
`;

export function Favorites({ favoritos }) {
	return (
		<StyledTimeline>
			<DivFavoritos>
				<section>
					<h2>Favoritos</h2>
					<div>
						{favoritos.map((dataAtributes, index) => (
							<a
								key={index}
								href={dataAtributes.url}
								target="_blank"
								rel="noreferrer"
							>
								<img src={dataAtributes.photo} alt="Avatar do usuário" />
								<span>@{dataAtributes.name}</span>
							</a>
						))}
					</div>
				</section>
			</DivFavoritos>
		</StyledTimeline>
	);
}

export default Favorites;
