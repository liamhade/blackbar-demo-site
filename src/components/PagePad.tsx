import React from "react";

export default function PagePad({ child }: { child: React.ReactElement }) {
	return (
		<div style={{ paddingLeft: "2vw", paddingTop: "2vh" }}>
			{child}
		</div>
	)
}