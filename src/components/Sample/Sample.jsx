import React from 'react';
if(process.env.BROWSER) {
	require('./Sample.css');
}

export default class Sample extends React.Component {
	render () {
		return (
			<div className='sample'>
				<h1 className='sample-header'>10000</h1>
			</div>
		);
	}
}