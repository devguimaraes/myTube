import styled from 'styled-components';

export const StyledTimeline = styled.div`
	* {
		scrollbar-width: auto;
		scrollbar-color: ${({ theme }) => theme.borderBase || '#b3b2b3'};
	}

	/* Chrome, Edge, and Safari */
	*::-webkit-scrollbar {
		width: 8px;
	}

	*::-webkit-scrollbar-track {
		border-radius: 400px;
		background: ${({ theme }) => theme.borderBase || '#b3b2b3'};
	}

	*::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.borderBase || '#b3b2b3'};
		border-radius: 10px;
		border: 2px solid #1c1c1c;
	}

	flex: 1;
	width: 100%;
	padding: 16px;
	overflow: hidden;
	h2 {
		font-size: 16px;
		margin-bottom: 16px;
		text-transform: capitalize;
	}
	img {
		aspect-ratio: 16/9;
		font-weight: 500;
		object-fit: cover;
		width: 100%;
		max-width: 210px;
		height: auto;
	}
	section {
		width: 100%;
		padding: 0;
		overflow: hidden;
		padding: 16px;
		div {
			width: calc(100vw - 16px * 4);
			display: grid;
			grid-gap: 16px;
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			grid-auto-flow: column;
			grid-auto-columns: minmax(200px, 1fr);
			overflow-x: scroll;
			scroll-snap-type: x mandatory;
			a {
				scroll-snap-align: start;
				span {
					padding-top: 8px;
					display: block;
					padding-right: 24px;
					color: ${({ theme }) => theme.textColorBase || '#222222'};
				}
			}
		}
	}
`;

export default StyledTimeline;
