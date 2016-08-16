var React = require("react");
var FormModul = require('./form');
var Preview = require('./preview');

var HelloWorld = React.createClass({

    getInitialState:function() {
        return {
            title:"Hej världen!"
            ,color:'blue'
            ,allColors:['red','blue','green','yellow','brown']
        }
    }
    , changeColor(nyColor) {
        console.log('Från HelloWorld: %s', nyColor);
        this.setState({
            color:nyColor
        });
    }
    , componentWillMount() {
      //  alert('Nu läggs jag till!');
    }
   ,insertNewColor(newColor) {
       var tempArr = this.state.allColors;
       tempArr.push(newColor);
       this.setState({allColors:tempArr});
   } 
   , render: function () {
       
       // alert('Nu renderar jag!');
        return (
            <div>
             <h1>{this.state.title}</h1>
             <p>Jag har slut på fantasi!</p>
             <FormModul newColorFunction={this.insertNewColor} allColors={this.state.allColors} favcolor={this.state.color} colorChange={this.changeColor}/>
             <Preview color={this.state.color}/>
            </div>
        )
        

    }

});
module.exports = HelloWorld;