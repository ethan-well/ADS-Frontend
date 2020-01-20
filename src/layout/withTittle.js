import React from 'react';
import TitleComponent from './title';

export default function WithTitle(Component, title) {
  return (
    <React.Fragment>
      <TitleComponent title={title} />
      <Component />
    </React.Fragment>
  )
}
