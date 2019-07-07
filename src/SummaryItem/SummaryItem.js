import React from 'react';

class SummaryItem extends React.Component {
    render() {
        return (
            <div className="summary__option" key={this.props.itemKey}>
                {/* Summary__option__label displaying correctly on click */}
                <div className="summary__option__label">{this.props.itemKey}  
                </div>
                <div className="summary__option__value">
                    {this.props.selected[this.props.itemKey].name}
                </div>
                <div className="summary__option__cost">
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.selected[this.props.itemKey].cost) }
                </div>
            </div>
        )
    }
}

export default SummaryItem;