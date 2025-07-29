import React from 'react';
import '../App.css';
import DropdownMenu from "../components/DropdownMenu";
import dashboardData from "../data/dashboardData.json";

const thinTableData  : Record<string, string> = dashboardData["thin-table"];
const largeTableData : Record<string, string> = dashboardData["large-table"];

function Header() {
  return (
	<div className="page-header">
	  Circuit Details
	</div>
  )
}

function ThinTable() {
  return (
	<div>
	  <table className="thin-table">
		<thead className="thin-table-header">
		  <tr>
			{Object.keys(thinTableData).map((name, index) => (
				<th style={{ textAlign: "center" }} key={index + "-thin-table-key"} className="column-name">
					{name}
				</th>
			))}
		  </tr>
		</thead>
		<tbody className="thin-table-body">
			<tr>
			  {Object.keys(thinTableData).map((key, index) =>  (
				<td key={index + "-thin-table-value"} dangerouslySetInnerHTML={{ __html: thinTableData[key] }} />
			  ))}
			</tr>
		</tbody>
	  </table>
	</div>
  )
}

function HyperLinks() {
  const link_titles = [
	"Circuit Details",
	"Network Accuracy",
	"ChannelClR",
	"Circuit Dependency",
	"Circuit Layout View",
	"BC2 Tool",
	"Directory Details",
	"Explicit Route",
	"Order History",
	"Lag Details",
	"Customer Details",
	"ContextAUDITSTIPULATIONS",
	"Trail Ambutes",
	"Cross Reference",
	"Link-Trunk usage"
  ];

  return (
	<table className="hyperlinks">
	  <tr>
		{link_titles.map((link) => (
		  <td>
			<a href="#">{link}</a>
		  </td>
		))}
	  </tr>
	</table>
  )
}

function ButtonTriplets() {
  return (
	<div className="buttonTriplets">
	  <div>
		<button className="leftButton">Sent</button>
	  </div>
	  <div>
		<button className="middleButton">Trial Attributes</button>
	  </div>
	  <div>
		<button className="rightButton">Internal Change</button>
	  </div>
	</div>
  )
}

function chunkList<T>(list: T[], n: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < list.length; i += n) {
	result.push(list.slice(i, i + n));
  }
  return result;
}

function LargeTable() {
  var cols = 5;
  return (
	<div className="table-wrapper">
	  <table className="large-table">
		<tbody>
		  {chunkList(Object.keys(largeTableData), cols).map((chunk, index) => (
			<React.Fragment>
				<tr key={index + "-key"}>
					{chunk.map((key) =>(
						<td className="key-cell">{key + ":"}</td>
				))}
				</tr>
				<tr key={index + "-value"}>
					{chunk.map((key) =>(
						<td className="value-cell" dangerouslySetInnerHTML={{ __html: largeTableData[key] }} />
				))}
				</tr>
			</React.Fragment>
		  ))}
		</tbody>
	  </table>
	</div>
  )
}

function SuffixButtons() {
	return (
		<div className="suffix-buttons">
			<button className="save-button">Save</button>
			<button className="remarks-button">Create Remarks</button>
		</div>
	)
}

export default function DashboardPage() {
  return (
	<div className="dashboard-page">
		<DropdownMenu defaultIndex={0} />
		<Header />
		<div className="dashboard-body-wrapper">
			<ThinTable />
			<div>
				<HyperLinks/>
				<ButtonTriplets />
				<LargeTable />
				<SuffixButtons />
			</div>
		</div>
	</div>
  );
}