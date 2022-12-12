import React from "react";
import './mortgage.component.css';

const calculatePayment = function (principal, years, rate) {
    let monthlyRate = rate / 100 / 12;
    let monthlyPayment = principal * monthlyRate / (1-(Math.pow(1/(1+monthlyRate), years * 12)));
    let balance = principal;
    for (let y=0; y<years; y++) {
      let interestY = 0;
      let principalY = 0;
      for (let m=0; m<12; m++) {
        const interestM = balance * monthlyRate;
        const principalM = monthlyPayment - interestM;
        interestY = interestY + interestM;
        principalY = principalY + principalM;
        balance = balance - principalM;
      }
    }
    return {
      monthlyPayment
    }
  }
  
  class Mortgage extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        principal: this.props.principal,
        years: this.props.years,
        rate: this.props.rate,
      }
      this.principalChange = this.principalChange.bind(this)
      this.yearsChange = this.yearsChange.bind(this)
      this.rateChange = this.rateChange.bind(this)
    }
  
    principalChange(event) {
      this.setState({
        principal: event.target.value
      });
    }
  
    yearsChange(event) {
      this.setState({
        years: event.target.value
      });
    }
  
    rateChange(event) {
      this.setState({
        rate: event.target.value
      });
    }
  
    render() {
      const payment = calculatePayment(this.state.principal, this.state.years, this.state.rate);
      const monthlyPayment = payment.monthlyPayment;
  
      return (
        <div className="content">
          <div className="form">
            <div>
              <label>Principal:</label>
              <input
                type="text"
                value={this.state.principal}
                onChange={this.principalChange}/>
            </div>
  
            <div>
              <label>Years:</label>
              <input
                type="text"
                value={this.state.years}
                onChange={this.yearsChange}/>
            </div>
  
            <div>
              <label htmlFor="rate">Rate:</label>
              <input
                type="text"
                value={this.state.rate}
                onChange={this.rateChange}/>
            </div>
          </div>
          <h2>
            Monthly Payment:
              <span className="currency">
                {Number(monthlyPayment.toFixed(2)).toLocaleString()}
              </span>
          </h2>
        </div>
      )
    }
  }
  
  export default Mortgage;