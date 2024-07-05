import React from "react";
import "../css/app.css";
import { Container, Stack, Box,Typography, Button } from "@mui/material";
  function App() {
    return <Container maxwidth="sm">
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Create react App on TypeScript with REDUX
          </Typography>
        </Box>
        <Button variant="container">Contained</Button>
    </Stack>
  </Container>
}

export default App;
