import React from 'react';
import Title from 'theme/title/Title';


const COPY = "Cupcake ipsum dolor sit amet powder. I love lemon drops brownie apple pie tart lollipop gingerbread cake. Sweet I love chupa chups. Apple pie jelly beans cheesecake. Topping chocolate cake muffin chocolate cake I love. Gummi bears cake chupa chups brownie muffin. Cookie cake topping I love cookie. I love donut sugar plum dragée icing gingerbread biscuit cookie. Bonbon tart marshmallow soufflé candy canes topping. Croissant croissant topping ice cream cheesecake I love bonbon. Bonbon I love cupcake jelly tiramisu. Cake dragée donut gingerbread dragée marzipan dessert. I love topping liquorice cookie fruitcake icing. Icing chupa chups dragée halvah ice cream cheesecake.";

const About = () => {
  return (
    <div>
      <Title title="About" />
      <div className="container">
        <div className="container__aside">
          <div className="text">
            Hi! My name is Kociasta!
          </div>
        </div>

        <div className="container__main">
          <div className="text">
            {COPY}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
