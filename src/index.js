import React from 'react';
import ReactDOM from 'react-dom';
import Example from './stateHook';
import UseEffectExample from './useEffect';
import App from './app';

export default class HelloReact extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return( 
      <div>
        <Example/>
        <UseEffectExample/>
        <App/>
        Hello ADS!
      </div>
    );
  }
}

ReactDOM.render(<HelloReact />, document.getElementById('root'));