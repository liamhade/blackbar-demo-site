import '../App.css';

const DATA : Record<string, string[]> = {
  "Action" : [""],
  "Diversity": [""],
  "Explicit Rates": [""],
  "Circuit ID": ["THISISATESTID"],
  "Project ID": [""],
  "Trial Version": ["2"],
  "Status": ["IN EFFECT"],
  "Order Number": ["<a href='#'>3160122</a>"],
  "Bandwidth": ["ETHERNET"],
  "Topology": ["Point to Point"],
  "Type": ["ETHERNET_EVC"],
  "SubType": ["PHP_ETHERNET_EVC"],
  "A Location": ["NYCNNWYT"], 
  "Z Location": ["DLLSTXIS"],
  "In Service": ["2025.05.09 11.23.50"],
  "Total Channels": ["0"],
  "Used Channels": ["0"],
  "Available Channels": ["0"],
  "Labels": [""],
  "A Port AID": ["GigabitEthernet0111"],
  "A Equipment Log Id": [""],
  "Comments": [""],
  "Trial Alias": ["325511071 Edit Text-Alias"],
  "A IP Address": [""],
  "A IPv^ Address": [""],
  "Used Count": ["0"],
  "A Ethernet Interface": [""],
  "A Sub-Location": [""],
  "Created By": ["PG"],
  "Order source": ["PG"],
  "Updated By": ["Nautilus\n"],
  "Next Revision Trail": [""],
  "Sub-Network M": ["\n   Edit SubNetworkId"],
  "Subnet Mask": ["\n   Edit Subnet Mask"],
  "Z Port AID": ["PW-Ether591"],
  "Z Equipment Log Id": [""],
  "TSP Code": [""],
  "Designs Created By": ["UIAM, UIAM"],
  "Customer ID": ["9001702"],
  "Network Id": ["NGM_Network Edit NetworkId"],
  "Z Ip Address": ["\n   Edit Z Ip Address"],
  "Z IPv6 Address": ["\n  Exit Z IPv6 Address"],
  "Blocked Count": [""],
  "Z Ethernet Interface": [""],
  "Z Sub-Location": [""],
  "Created Timestamp": ["2025-03-25 16:28:07"],
  "Installation Date": ["2025-04-16 14:56:17"],
  "Updated Timestamp": ["2025-05-09 11:12:54"],
  "Previous Revision Trail": ["PTE000000000006N9"],
  "Mesh Id": [""],
  "LAF": ["\nn   Edx LAF"],
  "Estimated Mileage": ["\n  Edit Mileage"],
  "Estimated Latency": ["\n Edit Latency"],
  "Label": ["\n  Edit Label"],
  "Service Priority": [""],
  "Order Reveived Date": ["2025-04-01 09:53:47 \n"],
  "Scheduled Date": ["\n"],
  "Due Date": ["2025-04-17 12:00:00"],
  "AFE Number": ["\n  Edit AFE Number"],
  "Sub-Mesh Id": ["\n"]
}

function Header() {
  return (
	<div className="page-header">
	  Circuit Details
	</div>
  )
}

function ThinTable() {
  return (
	<div >
	  <table className="thin-table">
		<thead className="thin-table-header">
		  <tr>
			{Object.keys(DATA).map((name) => (
			  <th className="column_name">{name}</th>
			))}
		  </tr>
		</thead>
		<tbody className="thin-table-body">
			<tr>
			  {Object.keys(DATA).map((key, index) =>  (
				<td>{DATA[key][0]}</td>
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
	<div>
	  <table>
		<tbody>
		  {chunkList(Object.keys(DATA), cols).map((chunk) => (
			<tr>
			{chunk.map((key) =>(
			  <td
				key={key}
				dangerouslySetInnerHTML={{ __html: `${key}<br/>${DATA[key][0]}` }}
			  />
			))}
			</tr>
		  ))}
		</tbody>
	  </table>
	</div>
  )
}

function SuffixButtons() {
  return (
	<div className="suffix-buttons">
	  <button>Save</button>
	  <button>Create Remarks</button>
	</div>
  )
}

export default function DashboardPage() {
  return (
	<div className="dashboard-page">
	<Header />
	<ThinTable />
	<HyperLinks/>
	<ButtonTriplets />
	<LargeTable />
	<SuffixButtons />
	</div>
  );
}