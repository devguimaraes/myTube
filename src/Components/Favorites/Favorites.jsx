/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import { StyledTimeline } from '../StyledTimeline/StyledTimeline';

const DivFavoritos = styled.div`
	img {
		width: 100px;
		height: 110px;
		border-radius: 50%;
	}
`;

export function Favorites({ favoritos }) {
	return (
		<StyledTimeline>
			<section>
				<h2>Favoritos</h2>
				<div>
					{favoritos.map((dataAtributes, index) => (
						<div key={index}>
							<a href={dataAtributes.url} target="_blank" rel="noreferrer">
								<DivFavoritos>
									<img src={dataAtributes.photo} alt="Avatar do usuário" />
								</DivFavoritos>
								<div>
									<span>@{dataAtributes.name}</span>
								</div>
							</a>
						</div>
					))}
				</div>
			</section>
		</StyledTimeline>
	);
}

export default Favorites;
