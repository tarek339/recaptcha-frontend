const url = "https://www.youtube.com/watch?v=Poa5oKIyMd4";

const scrape = () => {
  fetch(url)
    .then((data) => {
      console.log("Fetched data:", data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

function App() {
  // return <NoRobotCheck />;
  return (
    <div>
      HI
      <button onClick={scrape}>click</button>
    </div>
  );
}

export default App;
