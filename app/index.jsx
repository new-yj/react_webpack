import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<section>
					<h1>Search Github Users</h1>
				</section>
			</div>
		)
	}
};

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(
	<App />,
	app
);