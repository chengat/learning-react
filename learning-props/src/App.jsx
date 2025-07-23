/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */
import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact
        img="./src/assets/mr-whiskerson.png"
        name="Mr. Whiskerson"
        number="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="./src/assets/fluffykins.png"
        name="Fluffykins"
        number="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="./src/assets/felix.png"
        name="Felix"
        number="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="./src/assets/pumpkin.png"
        name="Pumpkin"
        number="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
