import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <li key={this.props.itemKey} className="feature__item">
                <div 
                    className={this.props.featureClass}
                    onClick=
                    {e => 
                    this.props.updateFeature(this.props.feature, this.props.item)}
                    >

                    { this.props.item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.item.cost) })

                </div>
            </li>
        )
    }
}

export default Item;