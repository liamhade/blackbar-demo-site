import React from 'react';
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import orderSummaryData from "../data/orderSummaryData.json";
import "../App.css"

const tableData : Record<string, string> = orderSummaryData

function Header() {
	return (
		<h3>__ Order Summary</h3>
	)
}

function RefreshButton() {
	return (
		<button className="refresh-button">Refresh</button>
	)
}

function chunkList<T>(list: T[], n: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < list.length; i += n) {
	result.push(list.slice(i, i + n));
  }
  return result;
}

function ShowData() {
	const cols = 6;

	return (
		<table className="order-summary-table">
			<tbody>
				{chunkList(Object.keys(tableData), cols).map((chunk, index) => (
				<React.Fragment>
					<tr key={index + "-key"}>
						{chunk.map((key) =>(
							<td className="key-cell">{key + ":"}</td>
					))}
					</tr>
					<tr key={index + "-value"}>
						{chunk.map((key) =>(
							<td className="value-cell">{tableData[key]}</td>
					))}
					</tr>
				</React.Fragment>
				))}
			</tbody>
		</table>
	)
}

function BackButton() {
	const navigate = useNavigate();
	return (
		<button onClick={() => navigate("/dashboard")}>Back</button>
	)
}

export default function OrderSummary() {
	return (
		<div>
			<DropdownMenu defaultIndex={1}/>
			<div className="order-summary">
				<Header />
				<RefreshButton />
				<ShowData />
			</div>
		</div>
	)
}

