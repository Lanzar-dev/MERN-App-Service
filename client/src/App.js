import React from "react";
import axios from 'axios';
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestShows: [],
      val: ""
    };
  }

  //Hi
  componentDidMount() {
    // axios.get('/welcome')
    // .then(res => {
    //   // console.log("data recieved: ", res);
    //   this.setState({ val: res.data });
    // })
    // console.log("componentDidMount success")
    axios.get('/test')
    .then(res => {
      console.log("data recieved: ", res.data);
      this.setState({ bestShows: res.data[0].name });
    })
    .catch(alert);
    // axios.get('/api/data')
    //   .then(res => {
    //     console.log("data recieved: ", res.data);
    //     this.setState({ bestShows: res.data[0] });
    //   })
    //   .catch(alert);
  }


  render() {
    // console.log("render bestShows: ", this.state.bestShows)
    return (
      <div>
        azure-mern-demo {this.state.bestShows}
        <ul>
          {/* {
            Object.keys(this.state.bestShows).map((cur, idx) => (
              <li>{cur} - {this.state.bestShows[cur]} </li>
            ))
          } */}
        </ul>
      </div>
    );
  }
}

export default App;
