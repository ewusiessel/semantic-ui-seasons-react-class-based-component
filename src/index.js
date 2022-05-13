import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <h1>Latitude: {this.state.lat} </h1>
        </div>
      );
    }

    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
