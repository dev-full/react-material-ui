import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: '2px',
    flexGrow: 0,
    flexShrink: 0,
  },
  sm: {
    height: theme.spacing(1),
    width: theme.spacing(1)
  },
  md: {
    height: theme.spacing(2),
    width: theme.spacing(2)
  },
  lg: {
    height: theme.spacing(3),
    width: theme.spacing(3)
  },
  inappropriate: {
    borderColor: '#FFB946'
  },
  notrelevant: {
    borderColor: '#2ED47A'
  },
  spam: {
    borderColor: '#F7685B'
  },
}));

const TypeBullet = props => {
  const { className, size, color, ...rest } = props;

  const classes = useStyles();

  return (
    <span
      {...rest}
      className={clsx(
        {
          [classes.root]: true,
          [classes[size]]: size,
          [classes[color]]: color
        },
        className
      )}
    />
  );
};

TypeBullet.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'inappropriate',
    'notrelevant',
    'spam',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

TypeBullet.defaultProps = {
  size: 'md',
  color: 'default'
};

export default TypeBullet;
