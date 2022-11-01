import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	box-sizing: border-box;
	scroll-behavior: smooth;
	-webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	font-size: 1rem;
}

#root {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	/* color: $primary-text-color; */
}

#root > main {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding-block: 2rem;
	background: ${props => props.theme.colors.background}
}

button {
	cursor: pointer;
}
`