import React, { Component } from "react";
import "./App.css";
import BMI_CALCULATOR from "./BMI_CALCULATOR/BmiCalculator";

class App extends Component {
	// state = {
	// 	bmiValue: "",
	// };

	// changed = (event) => {
	// 	this.setState({ height: event.target.value });
	// };
	// change = (event) => {
	// 	this.setState({
	// 		weight: event.target.value,
	// 	});
	// };

	// function App() {

	// calculateBMI = (event) => {
	// 	if (this.state.height === undefined || this.state.weight === undefined) {
	// 		this.setState({
	// 			bmiValue: (event.target.value = ""),
	// 		});
	// 		alert("Enter Input values");
	// 	} else if (
	// 		typeof this.state.height.value == "string" ||
	// 		typeof this.state.weight.value == "string"
	// 	) {
	// 		this.setState({
	// 			bmiValue: (event.target.value = undefined),
	// 		});
	// 		alert("Please write Correct Value");
	// 	} else {
	// 		const w = parseFloat(this.state.weight);
	// 		const h = parseFloat(this.state.height);
	// 		this.setState({
	// 			bmiValue: (w / Math.pow(h, 2).toFixed(3)).toFixed(2),
	// 		});
	// 	}
	// };
	render() {
		return (
			<div className="App container m-auto">
				{/* <input type="radio" name="r1" /> */}
				{/* <input type="radio" name="r1" /> */}
				<BMI_CALCULATOR
				// click={this.calculateBMI}
				// changed={this.changed}
				// change={this.change}
				// bmiValue={this.state.bmiValue}
				/>
			</div>
		);
	}
}

export default App;
