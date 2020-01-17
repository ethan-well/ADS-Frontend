import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://120.24.88.228/">
        蚂蚁哈哈哈
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}