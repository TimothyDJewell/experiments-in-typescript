import { createElement } from 'react';
import { render as reactDomRender } from 'react-dom';
import SetupReload from './dev/hot-reloader';
import { createStore, Store, Dispatch } from 'redux';
import { Provider, ProviderProps, connect } from 'react-redux';
declare var appStore : Store<number>;

const counter = (state : number = 0, action : {type: string}) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

const createDiv = (props : any, ...children : React.ReactNode[]) => createElement('div', props, ...children);
const createSpan = (props : any, ...children : React.ReactNode[]) => createElement('span', props, ...children);

const counterControlView = ({count, onIncrementClick} : { count: number, onIncrementClick: () => void}) =>
  createDiv(null,
    createSpan(null, 'Clicked: ' + count),
    createElement('input',
      {type: 'button', onClick: onIncrementClick, value: 'Increment'}, null)
);
const mapStateToProps = (count : number) => ({ count });
const mapDispatchToProps = (dispatch : Dispatch<number>) => ({
  onIncrementClick: () => dispatch({type: 'INCREMENT'})});
const counterControl = connect(mapStateToProps, mapDispatchToProps)(counterControlView);

appStore = appStore || createStore(counter);

reactDomRender(
  createElement(Provider,
    { store: appStore },
    createElement(counterControl, null)),
  document.getElementById('root')
);

SetupReload();
