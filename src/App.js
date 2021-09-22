import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card";
import stevie from "./images/stevieDock.png";
import stevie2 from "./images/stevieDock2.png";
import stevie3 from "./images/stevieDock3.png";
import stevie4 from "./images/stevieDock4.png";
import walking from "./images/walking.png";
import stevieRock from "./images/stevieRock.png";
import React from "react";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>

    /* 
    <div className="App">
      <Navbar />
      <Card
        title="Calm and relaxed"
        imageUrl={stevie}
        body="Stevie at a cottage on Chandos lake in North Kwartha Photo taken by: @dallasblissphotography"
      />
      <Card
        title="Cool and collected"
        imageUrl={stevie2}
        body="Stevie staring intently at something off in the distance. Photo taken by: @dallasblissphotography"
      />
      <Card
        title="Chasing birds"
        imageUrl={stevie3}
        body="Stevie guarding the cottage from predators Photo taken by: @dallasblissphotography"
      />
      <Card
        title="Wild goose chase"
        imageUrl={stevie4}
        body="Stevie once again guarding the cottage from animals Photo taken by: @dallasblissphotography"
      />
      <Card
        title="A dog and his owner"
        imageUrl={walking}
        body="Stevie and her owner max walking through the woods Photo taken by: @dallasblissphotography"
      />
      <Card
        title="Wild hike"
        imageUrl={stevieRock}
        body="Stevie posing on a rock so her best friend can take a picture of her Photo taken by: @dallasblissphotography"
      />
    </div>  */
  );
}

export default App;
