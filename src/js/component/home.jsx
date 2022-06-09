import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import CardDeck from "./carddeck.jsx";
import Card from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <React.Fragment>
      <div className="row">
        <Navbar />
      </div>
      <Jumbotron
        title="This is a prop!"
        description="Elit officia culpa minim consequat. Minim occaecat id elit culpa cillum laboris commodo ea pariatur reprehenderit. Nostrud ipsum reprehenderit incididunt laborum duis sit in fugiat labore ut enim cillum consectetur et."
        buttontext="Call To Action!"
      />
      <CardDeck>
        <Card
          imgsrc="https://placekitten.com/500"
          title="Kitten!"
          text="Non non consequat et elit occaecat eu magna adipisicing laborum culpa excepteur. Nostrud cillum consectetur ex ad nulla eiusmod veniam laboris amet. Est ut consectetur officia culpa ipsum ex id aute commodo fugiat non."
          buttontext="This is a button!"
          href="#"
        />
        <Card
          imgsrc="https://placekitten.com/500"
          title="Kitten!"
          text="Non non consequat et elit occaecat eu magna adipisicing laborum culpa excepteur. Nostrud cillum consectetur ex ad nulla eiusmod veniam laboris amet. Est ut consectetur officia culpa ipsum ex id aute commodo fugiat non."
          buttontext="This is a button!"
          href="#"
        />
        <Card
          imgsrc="https://placekitten.com/500"
          title="Kitten!"
          text="Non non consequat et elit occaecat eu magna adipisicing laborum culpa excepteur. Nostrud cillum consectetur ex ad nulla eiusmod veniam laboris amet. Est ut consectetur officia culpa ipsum ex id aute commodo fugiat non."
          buttontext="This is a button!"
          href="#"
        />
        <Card
          imgsrc="https://placekitten.com/500"
          title="Kitten!"
          text="Non non consequat et elit occaecat eu magna adipisicing laborum culpa excepteur. Nostrud cillum consectetur ex ad nulla eiusmod veniam laboris amet. Est ut consectetur officia culpa ipsum ex id aute commodo fugiat non."
          buttontext="This is a button!"
          href="#"
        />
        <Card
          imgsrc="https://placekitten.com/500"
          title="Kitten!"
          text="Non non consequat et elit occaecat eu magna adipisicing laborum culpa excepteur. Nostrud cillum consectetur ex ad nulla eiusmod veniam laboris amet. Est ut consectetur officia culpa ipsum ex id aute commodo fugiat non."
          buttontext="This is a button!"
          href="#"
        />
        <Card
          imgsrc="https://placekitten.com/500"
          title="Kitten!"
          text="Non non consequat et elit occaecat eu magna adipisicing laborum culpa excepteur. Nostrud cillum consectetur ex ad nulla eiusmod veniam laboris amet. Est ut consectetur officia culpa ipsum ex id aute commodo fugiat non."
          buttontext="This is a button!"
          href="#"
        />
        <Card
          imgsrc="https://placekitten.com/500"
          title="Kitten!"
          text="Non non consequat et elit occaecat eu magna adipisicing laborum culpa excepteur. Nostrud cillum consectetur ex ad nulla eiusmod veniam laboris amet. Est ut consectetur officia culpa ipsum ex id aute commodo fugiat non."
          buttontext="This is a button!"
          href="#"
        />
        <Card
          imgsrc="https://placekitten.com/500"
          title="Kitten!"
          text="Non non consequat et elit occaecat eu magna adipisicing laborum culpa excepteur. Nostrud cillum consectetur ex ad nulla eiusmod veniam laboris amet. Est ut consectetur officia culpa ipsum ex id aute commodo fugiat non."
          buttontext="This is a button!"
          href="#"
        />
        <Card
          imgsrc="https://placekitten.com/500"
          title="Kitten!"
          text="Non non consequat et elit occaecat eu magna adipisicing laborum culpa excepteur. Nostrud cillum consectetur ex ad nulla eiusmod veniam laboris amet. Est ut consectetur officia culpa ipsum ex id aute commodo fugiat non."
          buttontext="This is a button!"
          href="#"
        />
      </CardDeck>
    </React.Fragment>
  );
};

export default Home;
