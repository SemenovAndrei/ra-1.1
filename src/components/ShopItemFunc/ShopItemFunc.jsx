import React from 'react'
import PropTypes from 'prop-types'
import ItemModel from '../../models/ItemModel'


export default function ShopItemFunc(props) {

const { item } = props

  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">{item.descriptionFull}</div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
    </div>
  )
}

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(ItemModel).isRequired
}
