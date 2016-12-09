import React from 'react';
import ReactDOM from 'react-dom';


class Product extends React.Component {
  render(){
    return (
      <div>
      <div>{this.props.name}</div>
      <div>{this.props.producer}</div>
      <div>{this.props.color}</div>
      <div>{this.props.weight}</div>
      </div>
    );
  }
}

const weightValidator = (props, propName, componentName) => {
    let weightInput = props[propName];
    if (!weightInput){
      return new Error("Weight is required!"); 
    }else if (typeof weightInput !== 'number'){
      return new Error(`#{weightInput} must be a number!`);
    }else if (weightInput < 80 || weightInput > 300){
      return new Error(`#{weightInput} must be between 80-300!`); 
    }
  };

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightValidator,
  hasWatermark: React.PropTypes.bool
};

Product.defaultProps = {
  hasWatermark: false
};



module.exports = Product;