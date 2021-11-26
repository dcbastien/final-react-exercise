import MCUShows from "./mcu-shows/MCUShows";


const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
 }


function App() {
  return (
    <div>
      <h1>FINAL REACT EXERCISE</h1>
  <MCUShows dates = {releaseDates} />  
  </div>
  );
}

export default App;
