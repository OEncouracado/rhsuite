"use client";

import { Box, Card, CardContent, Container } from "@mui/material";
const styles = `
.teste {
  background-image: url('https://genyo.com.br/wp-content/uploads/2023/06/ferramentas-para-rh-e-dp.webp');
  background-color: red;
  width: 100px;
  height: 100px;
}
`;
export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <h1>Home 1</h1>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <div className={styles}>TEste</div>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
