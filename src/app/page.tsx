"use client";
import TopBar from "@/components/topNavBar";
import { Box, Card, CardContent, Container } from "@mui/material";
import "./styles.css";


export default function Home() {
  return (
  <>
  <TopBar />
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <a href="/colab"><div>Teste</div></a>
          </CardContent>
        </Card>
      </Box>
    </Container>
    </>
  );
}
