import styled from 'styled-components';

// styles-components
export const GroupWrapper = styled.div`
	margin: 0 0 40px 0;
`;

export const Title = styled.div`
	color: #002326;
	font-family: DIN;
	font-size: 17px;
	line-height: 25px;
	margin-bottom: 5px;
`;

export const Description = styled.div`
	color: #002326;
	font-family: DIN;
	font-size: 13px;
	line-height: 20px;
	margin-bottom: 5px;
`;

export const InputContainerBorder = styled.div`
	padding: 20px;
	border: 1px solid #1CC1CC;
	background-color: rgba(28,193,204,0.01);}
`;

export const Error = styled.div`
	margin: 5px 0px;
	font-family: DIN-Bold;
	font-size: 15px;
	color: #FF0000;
`;

export const Help = Description.extend`
	margin-top: 5px;
`;

export const Checkmark = styled.span`
	position: absolute;
	top: 4px;
	left: 0;
	height: 18px;
	width: 18px;
	background-color: #eee;

	:after {
		content: "";
		position: absolute;
		display: none;
	}
`;

export const CheckboxLabel = styled.label`
	display: block;
	position: relative;
	padding-left: 30px;
	margin-bottom: 12px;
	cursor: pointer;
	font-family: DIN;
	font-size: 17px;
	text-transform: none;
	color: #002326;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	opacity: 1;

	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	:hover input ~ ${Checkmark} {
		background-color: #ccc;
	}

	input:checked ~ ${Checkmark} {
		background-color: #1CC1CC;
	}

	input:checked ~ ${Checkmark}:after {
		display: block;
	}

	${Checkmark}:after {
		left: 5px;
		top: 1px;
		width: 8px;
		height: 12px;
		border: solid white;
		border-width: 0 2px 2px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`;