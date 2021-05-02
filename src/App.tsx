import React, { MouseEvent } from 'react';
import './App.scss';
import Operation from './utils';

interface AppProps{};

interface AppState {
  result: string,
  operationsList: Array<Operation>,
  index: number
};

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      result: '0',
      index: 0,
      operationsList: Array<Operation>()
    };
  }

  handleClick(event: MouseEvent) {
    const clickedObject = document.getElementById(event.currentTarget.id)!!.innerText;
    if (isNaN(parseInt(clickedObject))) {
      this.setOperation(clickedObject, "", this.state.index);
      return;
    }
  }

  setResult = (chars: string) => {
    this.setState({
      result: this.state.result + chars
    });
  };

  setOperation = (operator: string, number: string, index: number) => {
    this.state.operationsList[index].operator = operator;
    if (operator === '') {
      this.setState({
        index: index + 1
      });
      return;
    }
    this.state.operationsList[index].numbers += number;
  }

  render() {
    return (
      <div className="container">
        <div className="result">
            <h1>{this.state.result}</h1>
          </div>
        <div className="grid">
          <div id="clear" className="special" onClick={this.handleClick}>
            C
          </div>
          <div id="module" className="special" onClick={this.handleClick}>
            %
          </div>
          <div id="clear-all" className="special" onClick={this.handleClick}>
            CE
          </div>
          <div id="divide" className="artmetic" onClick={this.handleClick}>
            /
          </div>
          <div id="one" className="numpad" onClick={this.handleClick}>
            1
          </div>
          <div id="two" className="numpad" onClick={this.handleClick}>
            2
          </div>
          <div id="three" className="numpad" onClick={this.handleClick}>
            3
          </div>
          <div id="multiply" className="artmetic" onClick={this.handleClick}>
            *
          </div>
          <div id="four" className="numpad" onClick={this.handleClick}>
            4
          </div>
          <div id="five" className="numpad" onClick={this.handleClick}>
            5
          </div>
          <div id="six" className="numpad" onClick={this.handleClick}>
            6
          </div>
          <div id="substract" className="artmetic" onClick={this.handleClick}>
            -
          </div>
          <div id="seven" className="numpad" onClick={this.handleClick}>
            7
          </div>
          <div id="eight" className="numpad" onClick={this.handleClick}>
            8
          </div>
          <div id="nine" className="numpad" onClick={this.handleClick}>
            9
          </div>
          <div id="plus" className="artmetic" onClick={this.handleClick}>
            +
          </div>
          <div id="zero" className="zero numpad" onClick={this.handleClick}>
            0
          </div>
          <div id="point" className="numpad" onClick={this.handleClick}>
            .
          </div>
          <div id="empty" className="numpad" onClick={this.handleClick}>
            e
          </div>
          <div id="equal" className="artmetic" onClick={this.handleClick}>
            =
          </div>
        </div>
      </div>
    );
  }
};