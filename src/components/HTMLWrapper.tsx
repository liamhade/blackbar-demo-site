import DropdownMenu from "../components/DropdownMenu";

export default function HTMLWrapper({ url }: { url: string }) {
  return (
	<div>
		<DropdownMenu />
		<div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
		{/* Top dropdown menu or any other content */}
		<div style={{ padding: "10px", background: "#eee" }}>
			<select>
			<option>Menu 1</option>
			<option>Menu 2</option>
			</select>
		</div>

		<iframe
			src={url}
			style={{ flexGrow: 1, border: "none", width: "100%" }}
			title="Static HTML Page"
		/>
		</div>
	</div>
  );
}
