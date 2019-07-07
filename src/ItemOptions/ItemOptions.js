import React from 'react';

class ItemOptions extends React.Component {
    render() {
        return (
            <div className="feature" key={this.props.itemKey}>
                <div className="feature__name">
                    {this.props.itemKey}
                </div>
                <ul className="feature__list">
                    { this.props.options }
                </ul>
            </div>
        )
    }
}

export default ItemOptions;