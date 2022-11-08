import "./App.css";
import FormsTutorial from "./components/FormsTutorial";
import Header from "./components/Header";
import Meme from "./components/Meme";

//uncomment the following and its corresponding component call to understand state management
// import ReactStateTutorial from "./components/ReactStateTutorial";

function App() {
  return (
    // Test
    <div className="container">
      <Header />
      <Meme />
      {/* <ReactStateTutorial /> */}
      <FormsTutorial />
    </div>
  );
}

export default App;
