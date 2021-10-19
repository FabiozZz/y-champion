import React, { useEffect, useMemo } from 'react';
import lottie from 'lottie-web';
import animation from 'assets/404.json';

const NotFound = () => {
	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector('#react-logo'),
			animationData: animation,
		});
	}, []);
	return (
		<>
			<div style={{}} id={'react-logo'} />
			<style scoped={true} jsx={true}>{`
				#react-logo {
					grid-column: span 12;
					display: grid;
					grid-template-columns: 1fr;
					margin: 0 -32px;
				}
			`}</style>
		</>
	);
};

export default NotFound;
