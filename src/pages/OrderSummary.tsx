import { useNavigate } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import "../App.css"

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
	const serviceOrderData : Record<string, string> = {
		// Original data
		"evcOrderAction": "NEW",
		"custRequestedDueDate": "8-Jan-2024",
		"suppType": "",
		"pon": "NY10157A-EVC1",
		"evcType": "PREMIER",
		"evcConnection": "ATLS",
		"beBandwidth": "0 Mbps",
		"fdBandwidth": "0 Mbps",
		"ftcIndicator": "NO",
		"circuitId": "WAC12356",
		"customerCarrierName": "CIPT",
		"okr": "-",
		"requestType": "-",
		"apot": "-",
		"customerName": "TEST",
		"tsp": "-",
		"hotcutScheduleTime": "-",
		"toc": "-",
		"ncDescription": "-",
		"workFrame": "BU08910501",
		"bePrtt": "-",
		"pdPrtt": "RT PRTT",
		"rtPrttC": "-",
		"rtPrttB": "-",
		"pdPrttB": "-",
		"pdPcmB": "-",
		"ceVlan": "2323",
		"vAct": "N",
		"svAct": "-",
		"orderAction": "-",
		"currentRequestedDueDate": "-",
		"srNumber": "-",
		"pon2": "-",
		"ban": "-",
		"abr": "-",
		"budgetLineOfBusiness": "1.060",
		"classOfService": "-",
		"orderType": "-",
		"aensa": "(OSNA)",
		"tlsSpeed": "-",
		"handoff": "-",
		"apot2": "-",
		"protocol": "-",
		"icsc": "-",
		"referenceNumber": "-",
		"email": "ABC@XXX.COM",
		"requestedNetCustomerRequest": "-",
		"projectId": "-",
		"shortName": "-",
		"bePrttC": "-",
		"pdPrttC": "-",
		"pwdn": "FB1100226",
		"sVlan": "-",
		"fbCaseNumber": "(FB CNO)",
		"caseNumber": "(CNO)",
		"serviceType": "-",
		"diversityType": "-",
		"dateIssued": "-",
		"eda": "-",
		"cus": "-",
		"requestType2": "-",
		"expedited": "-",
		"projectId2": "-",
		"customerLineOfBusiness": "-",
		"interceptEligible": "-",
		"exceptionalOrderType": "-",
		"tsp2": "-",
		"dispatchable": "-",
		"interrupted": "-",
		"hotcutScheduleTime2": "-",
		"serviceOrderId": "SO2024-001234",
		"priority": "STANDARD",
		"region": "NORTHEAST",
		"market": "NYC-METRO",
		"technician": "TECH-456",
		"installationType": "NEW_INSTALL",
		"equipmentType": "ROUTER",
		"vendorName": "CISCO",
		"modelNumber": "ASR-9000",
		"serialNumber": "FOC2345G678",
		"softwareVersion": "7.3.2",
		"rackLocation": "R12-U24",
		"datacenterCode": "NYC-DC01",
		"cageNumber": "C-104",
		"crossConnectId": "XC-789123",
		"patchPanelId": "PP-A24",
		"portNumber": "24",
		"fiberType": "SMF",
		"connectorType": "LC",
		"wavelength": "1550nm",
		"powerLevel": "-3.2 dBm",
		"attenuationValue": "0.5 dB",
		"dispersionValue": "2.1 ps/nm",
		"testResults": "PASS",
		"signalQuality": "EXCELLENT",
		"errorRate": "0.001%",
		"latencyMs": "12.5",
		"jitterMs": "0.8",
		"packetLoss": "0.0%",
		"throughputMbps": "1000",
		"utilizationPercent": "15%",
		"redundancyType": "1+1",
		"backupPath": "PATH-B",
		"failoverTime": "50ms",
		"monitoringEnabled": "YES",
		"alertThreshold": "85%",
		"maintenanceWindow": "02:00-06:00",
		"escalationLevel": "L2",
		"supportGroup": "NET-OPS",
		"ticketNumber": "INC0012345",
		"changeRequest": "CHG0098765",
		"approvalStatus": "APPROVED",
		"approver": "MANAGER-789",
		"approvalDate": "15-Jan-2024",
		"scheduledStartTime": "20-Jan-2024 02:00",
		"scheduledEndTime": "20-Jan-2024 06:00",
		"actualStartTime": "-",
		"actualEndTime": "-",
		"duration": "4 hours",
		"businessImpact": "LOW",
		"riskLevel": "MEDIUM",
		"rollbackPlan": "AUTO-ROLLBACK",
		"testPlan": "TP-2024-001",
		"documentationLink": "https://docs.company.com/SO123",
		"complianceCheck": "PASSED",
		"securityReview": "COMPLETED",
		"networkSegment": "CORE",
		"routingProtocol": "BGP",
		"asNumber": "65001",
		"peerIpAddress": "192.168.1.1",
		"subnetMask": "255.255.255.0",
		"defaultGateway": "192.168.1.254",
		"dnsServer": "8.8.8.8",
		"ntpServer": "pool.ntp.org",
		"snmpCommunity": "public",
		"billingCode": "BC-2024-NET",
		"costCenter": "CC-1000",
		"chargeCode": "OPEX-NET"
	};
	const cols = 6;

	return (
		<table className="order-summary-table">
			<tbody>
			{chunkList(Object.keys(serviceOrderData), cols).map((chunk) => (
				<tr>
				{chunk.map((key) =>(
				<td>
					{key}
					<br />
					{serviceOrderData[key][0]}
				</td>
				))}
				</tr>
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

