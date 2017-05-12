import React from 'react';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let item = this.props.item;
    return (
      <ul>
        <li>{item.name}</li>
        <li>{item.happiness}</li>
        <li>{item.price}</li>
      </ul>
    );
  }
}

export default ItemDetail;
