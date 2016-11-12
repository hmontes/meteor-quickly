import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// Layouts
import MainLayout from '/imports/ui/layouts/MainLayout';

// Pages
import Index from '/imports/ui/pages/Index';

FlowRouter.route('/', {
	name: 'Home',
  	action() {
    	mount(MainLayout, {
      		main: <Index />,
    	});
  	},
});
