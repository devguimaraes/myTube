import styled from 'styled-components';
import config from '../../../config.json';

const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;

	.banner {
		width: 100%;
		height: 18.75rem;
		background-position: cover;
		background-image: url('./images/banner.jpg');
		background-repeat: no-repeat;
		background-size: 100%;
		margin-bottom: 1rem;
	}

	.user-info {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0px 1rem;
		line-height: 1.5rem;

		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}

		h2 {
			font-size: 1.3rem;
			font-weight: bold;
		}

		p {
			color: gray;
		}
	}
`;
export function Header() {
	return (
		<StyledHeader>
			<div className="banner" />
			<div className="user-info">
				<img
					src={`https://github.com/${config.github}.png`}
					alt="Avatar do Github do usuário"
				/>
				<section>
					<h2>{config.nome}</h2>
					<p>{config.job}</p>
				</section>
			</div>
		</StyledHeader>
	);
}

export default Header;
