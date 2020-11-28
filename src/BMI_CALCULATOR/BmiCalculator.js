import React, { Component } from "react";
import "./calBox.css";
import BMI from "./BmiChart";

// const BmiCalculator = (props) => {
class BmiCalculator extends Component {
	state = {
		bmi: "",
	};

	// Height Event Handler
	heightChanged = (event) => {
		this.setState({
			height: event.target.value,
		});
	};

	// Weight Event Handler
	weightChanged = (event) => {
		this.setState({
			weight: event.target.value,
		});
	};

	// Calculating BMI
	calculateBMI = (event) => {
		if (this.state.weight == null || this.state.height == null) {
			this.setState({
				bmi: "Fill Inputs Please",
			});
		} else if (isNaN(this.state.weight) || isNaN(this.state.height)) {
			this.setState({
				bmi: "Enter Correct Values",
			});
		} else {
			return this.setState({
				bmi: (
					parseFloat(this.state.weight) /
					Math.pow(parseFloat(this.state.height), 2).toFixed(3)
				).toFixed(2),
			});
		}
	};

	render() {
		return (
			<div>
				<h1 className="title">BMI CALCULATOR</h1>
				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="box">
							<div className="weight-box ">
								<label>Enter Weight in Kg</label>
								<input
									type="text"
									className="form-control-lg w-100"
									onChange={this.weightChanged}
									id="weight"
									name="weight"
								/>
							</div>
							<div className="height-box form-group my-4">
								<label>Enter Height in Meters</label>
								<input
									type="text"
									className="form-control-lg w-100"
									id="height"
									onChange={this.heightChanged}
									name="height"
								/>
							</div>
							<div className="form-group my-4">
								<label>Your BMI</label>
								<input
									readOnly
									type="text"
									className="BMI-box form-control-lg w-100"
									id="bmiInputBox"
									name="bmi"
									value={this.state.bmi}
								/>
							</div>
							<button className="btn btn-cal" onClick={this.calculateBMI}>
								Calculate BMI
							</button>
						</div>
					</div>

					<div className="col-lg-4 col-md-12">
						<div className="box2">
							<BMI />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BmiCalculator;
