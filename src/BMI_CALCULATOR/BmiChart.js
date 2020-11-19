import React from "react";

const BMI_CHART = (props) => {
	return (
		<div>
			<table className="table">
				<tbody>
					<tr>
						<th>BMI</th>
						<th>WEIGHT STATUS</th>
					</tr>
					<tr>
						<td>Below 18.5</td>
						<td>Underweight</td>
					</tr>
					<tr>
						<td>18.5 - 24.9</td>
						<td>Normal weight</td>
					</tr>
					<tr>
						<td>25.0 - 29.9</td>
						<td>Overweight</td>
					</tr>
					<tr>
						<td>30.0 - 34.9</td>
						<td>Obesity Class 1</td>
					</tr>
					<tr>
						<td>35.0 - 39.9</td>
						<td>Obesity Class 11</td>
					</tr>
					<tr>
						<td>Above 40</td>
						<td>Obesity Class 111</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default BMI_CHART;
