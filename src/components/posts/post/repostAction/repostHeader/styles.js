import styled from 'styled-components'

const RepostHeader = styled.div`
	display: flex;
	padding: 9px 12px;
	gap: 6px;

	position: absolute;
	top: -33px;

	z-index: -1;

	width: 611px;
	height: 60px;

	background: #1E1E1E;
	border-radius: 16px;
	svg{
		color: #FFFFFF;
		width: 18px;
		height: 18px;
	}
	p{
		font-family: 'Lato';
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: #FFFFFF;
	}
	span{
		font-weight: 700;
	}
	@media(max-width: 650px){
   width: 100vw;
   border-radius: unset;
 }
`
export {RepostHeader}