import styled from 'styled-components';

export const Description = styled.div`
	color: #002326;
	font-family: DIN;
	font-size: 17px;
	line-height: 25px;
	margin: 30px 0;
	word-wrap: break-word;

	& b {
		font-family: DIN-Bold;
	}

	@media only screen and (max-width: 568px) {
		font-size: 10px;
		line-height: 18px;
	}
`;
