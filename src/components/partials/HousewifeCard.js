class HousewifeCard extends Component {
    state = {
      img: "https://i.vimeocdn.com/portrait/58832_300x300"
    }
  
    render() {
      return (
        <div style={styles}>
          <img
            src={this.state.img}
            onMouseEnter={() => {
              this.setState({
                img: "http://www.toptipsclub.com/Images/page-img/keep-calm-and-prepare-for-a-test.png"
              })
            }}
  
            onMouseOut={() => {
              this.setState({
                img: "https://i.vimeocdn.com/portrait/58832_300x300"
              })
            }}
          />
        </div>
      )
    }
  };