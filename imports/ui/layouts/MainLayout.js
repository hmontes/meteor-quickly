import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

const MainLayout = (props) => (
	<div>
    	<h2>Navbar</h2>
    	{props.main}
  	</div>
);

export default createContainer(props => {
	return {
		// user: Meteor.user(),
  	};
}, MainLayout);
