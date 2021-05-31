import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card";
import stevie from "./images/stevieDock.png";
import stevie2 from "./images/stevieDock2.png";
import stevie3 from "./images/stevieDock3.png";
import stevie4 from "./images/stevieDock4.png";
import walking from "./images/walking.png";
import stevieRock from "./images/stevieRock.png";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div>
        <h1 className="home-header">Gallary</h1>
      </div>

      <div className="card-section">
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
      </div>
    </div>
  );
}

export default App;
