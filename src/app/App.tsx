import React from "react";
import "../css/app.css";
import { Container, Stack, Box, Typography, Button } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";

function App() {
  return (
		<Container sx={{background:"color"}}>
			<Stack flexDirection={"column"}>
				<Box sx={{ my: 4 }}>
					<Typography variant="h4" component={"h4"}>
						Hello World! and App on Type Scriptwith REDUX
					</Typography>
				</Box>
				<Box>
					<RippleBadge badgeContent={4}>
						<Button variant="contained" color={"secondary"}>Contained</Button>
					</RippleBadge>
				</Box>
			</Stack>
		</Container>
	);
}
export default App;
