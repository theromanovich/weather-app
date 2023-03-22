import Weather from "./components/Weather/Weather";
import CityProvider from "./helpers/city-context";
function App() {
  return (
    <CityProvider>
      <Weather />
    </CityProvider>
  );
}

export default App;
