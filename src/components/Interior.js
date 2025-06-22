import React from "react";
import Img3 from "../assets/Car_collection/cloth7.jpg";
import "./History.css";

const Interior = () => {
  return (
    <div className="history">
      <img src={Img3} alt="car3" />
      <h1>Things you should know about interior.</h1>
      <h5>
        Interior design can be traced as far back as ancient civilizations,
        where decoration and simple furnishings were used to create more
        comfortable living areas. Evidence suggests the Egyptians, Greeks, and
        Romans all embraced a certain amount of interior decoration, using
        richly coloured fabrics and elaborate mosaics to decorate their homes
        and recreational spaces. Interior design evolved further during the
        Renaissance period when internal decoration became a signifier of
        wealth, decadence, and luxury. This desire to use furnishings and
        interior design to showcase status frequently involved the adoption of
        more expensive materials for those who could afford it. By the 19th and
        20th centuries, interior design had–along with the rise of
        industrialization–evolved to focus more on functionality and the modern
        ideas of minimalism and simplicity. Today, trends in interior design
        tend to focus on sustainability in response to the climate change
        crisis, and creating interiors which can promote positive well-being as
        increasing numbers of people choose to work from home.
      </h5>
      {/* <h5>Our offices are located on the traditional, unced.</h5> */}
      <h3>What is interior design?</h3>
      <p>
        Interior design refers to the enhancement of the interior of a building
        or room in order to create a more aesthetically pleasing, functional,
        accessible, and safe space for those who use or inhabit it. While many
        of us might think of interior design as simply choosing furniture or
        arranging the lighting, the profession includes many practical and
        interpersonal elements such as construction organization, extensive
        research, and relationship building.
      </p>
      <h3>What’s the main purpose of interior design?</h3>
      <p>
        While we might think of interior design as being purely an aesthetic
        endeavour, its main purpose is actually more nuanced. Although the
        visual aesthetic of a space is a very important element of an interior
        designer’s work, it has to work in harmony with the accessibility and
        functionality of a space. Ultimately, an interior designer must ensure
        that everyone who uses the space can do so in a safe way, while enabling
        them to meet all of their immediate needs.
      </p>
      <h3>Why is interior design important?</h3>
      <p>
        While it’s easy to say that interior design makes a space more visually
        appealing, the practice actually brings about a range of other benefits
        that should not be underestimated. Below are some of the main reasons
        why interior design is so highly valued.
      </p>
      <h3>Maximizes the amount of available space</h3>
      <p>
        Interior design enables us to make the most of the space we have. In
        smaller spaces, an interior designer will opt for furniture that uses up
        minimal floor space, such as floating shelves, tables and chairs with
        narrow legs, and couches that are shallow-depth. Vertical spaces will
        also be taken advantage of with hanging plants and built-in bookshelves.
        Stowable and multipurpose furniture also helps create more space, while
        mirrors and skylights can increase the amount of natural light coming
        into a room, making a room appear larger and feel more spacious.
      </p>
      <a href="https://www.andacademy.com/resources/blog/interior-design/what-is-interior-design/">
        <button>Read More About Interior Design</button>
      </a>
    </div>
  );
};

export default Interior;
