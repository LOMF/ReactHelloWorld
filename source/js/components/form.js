var React = require('react');

var FormModul = React.createClass({
    
     render() {


         var colorItems = this.props.allColors.map((itemColor, i) => {
             return <li key={i} onClick={this.colorClicked.bind(this,itemColor)}>{itemColor}</li>
         });

        return (
            <form action="javascript:void(0)">
                <label>Lägg till ny färg</label>
                <input 
                type="text" 
                ref="color_input"
                 />
                 <button className="btn btn-primary" onClick={this.addNewColor}>Lägg till färg</button>
                <ul>
                    {colorItems}
                </ul>
            </form>
        )
    }
    ,addNewColor(event) {
        var nyColor = this.refs.color_input.value;
        this.props.newColorFunction(nyColor);
    }
    ,colorClicked(color) {
        
        this.props.colorChange(color);
        console.log('Färg klickades: %s', color);
    }
    ,changedColor(event) {
        
        console.log('Färgen har ändrats: %s', nyColor);
        this.props.colorChange(nyColor);
    }
});
module.exports = FormModul;