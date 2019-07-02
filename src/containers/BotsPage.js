import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'



class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    yourBots: []
   }

  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  setYourBots = (bot) => {

    this.setState((prevState)=> {
      const newBots = prevState.yourBots.push(bot)
      return {yourbots: newBots}
    })
    console.log(this.state.yourBots)

  }

  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} />
        <BotCollection bots={this.state.bots} handleClick={this.setYourBots}/>

      </div>
    );
  }

}

export default BotsPage;
