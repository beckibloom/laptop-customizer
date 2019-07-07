import React from 'react';
import ItemOptions from '../ItemOptions/ItemOptions.js';
import Item from '../Item/Item.js';

class ItemPicker extends React.Component {
    render() {
        const features = Object.keys(this.props.features)
          .map(key => {
            const options = this.props.features[key].map((item, index) => {
              const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;

              return (
                    <Item 
                        key={index}
                        item={item}
                        itemKey={index}
                        featureClass={featureClass}
                        updateFeature={this.props.updateFeature}
                        feature={key}
                    />
              )
            });

            return (
                <ItemOptions 
                    options={options}
                    itemKey={key}
                    key={key}
                />
            )
          }); 

        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { features }
            </section>
        )
    }
} 

export default ItemPicker;