import React from "react";
import "./calBox.css";
import BMI from "./BmiChart";

const BmiCalculator = (props) => {
	return (
		<div>
			<h1 className="title">BMI CALCULATOR</h1>
			<div className="row">
				<div className="col-lg-8 col-md-12">
					<div className="box">
						<div className="weight-box ">
							<label>Enter Weight in Kg</label>
							<input
								className="form-control-lg w-100"
								type="text"
								onChange={props.change}
							/>
						</div>
						<div className="height-box form-group my-4">
							<label>Enter Height in Meters</label>
							<input
								type="text"
								className="form-control-lg w-100"
								onChange={props.changed}
							/>
						</div>
						<div className="form-group my-4">
							<label>Your BMI</label>
							<input
								readOnly
								type="text"
								className="BMI-box form-control-lg w-100"
								value={props.bmiValue}
							/>
						</div>
						<button className="btn btn-cal" onClick={props.click}>
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
};

export default BmiCalculator;
