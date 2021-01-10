import React from 'react';

class Calculator extends React.Component {

    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            operation: '+',
            result: 0
        }

    }

    showResult() {
        let result = 0

        switch (this.state.operation) {
            case '+': result = this.state.number1 + this.state.number2; break;
            case '-': result = this.state.number1 - this.state.number2; break;
            case '*': result = this.state.number1 * this.state.number2; break;
            case '/': result = this.state.number1 / this.state.number2; break;
            default: break;
        }

        this.setState({ result: result });
    }

    onChangeNumber1(e) {
        this.setState({ number1: +e.target.value });
    }

    onChangeNumber2(e) {
        this.setState({ number2: +e.target.value })
    }

    operationChange(e) {
        this.setState({operation: e.target.value})
    }

    render() {
        return (
            <div className="calculator">
                <label htmlFor="num1">Первое число </label>
                <input id='num1' onChange={this.onChangeNumber1.bind(this)} type="text"/><br/>
                <label htmlFor="select">Выбери операцию</label><br/>
                <select id="select" onChange={this.operationChange.bind(this)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select><br/>
                <label htmlFor="num2">Второе число </label>
                <input id='num2' onChange={this.onChangeNumber2.bind(this)} type="text"/><br/>
                <button onClick={this.showResult.bind(this)}>Рассчитать</button>
                <div>{this.state.result}</div>
            </div>
        );
    }
}

export default Calculator;
