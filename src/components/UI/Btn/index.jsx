import React from 'react';
import classes from './btn.module.css';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Index = ({ children, factor = 'default', size = 'auto', ...props }) => {
	return (
		<button
			className={cn(
				classes.wrapper,
				classes['wrapper__size_' + size],
				classes['wrapper__' + factor],
				props.className
			)}
			{...props}>
			{children}
		</button>
	);
};
Index.prototype = {
	children: PropTypes.element.isRequired,
	factor: PropTypes.oneOf(['primary', 'default', 'danger', 'light']),
};

export default Index;
