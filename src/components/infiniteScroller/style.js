import styledComponents from 'styled-components'

const Div = styledComponents.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	p {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 26px;
		letter-spacing: 0.05em;
		color: #6D6D6D;
		margin-top: 10px;
	}
	margin-bottom: 50px;
`
export { Div }