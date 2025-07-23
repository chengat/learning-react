import { createRoot } from "react-dom/client";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const root = createRoot(document.getElementById("root"));

// function ChallengeOne() {
//   return (
//     <main>
//       <img src="src/assets/react.svg" width="40 px" alt="React Logo" />
//       <h1>Fun Facts about React!</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on GitHub</li>
//         <li>Is maintained by Meta</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </main>
//   );
// }

function Page() {
  return (
    //Part 2
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);
