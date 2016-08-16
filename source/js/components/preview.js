var React = require('react');

var Preview = React.createClass({

    getDefaultProps: function() {
        return {
            color:'green'
        }
    }
    , render() {

        var nyStyle = {
            backgroundColor: this.props.color
        };

        return (
            <div className="preview-grej" style={nyStyle}>

            </div>
        )
    }

});
module.exports = Preview;