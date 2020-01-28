import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/colection-preview/colection-preview';
import { selectShopCollections } from '../../redux/sop/shop.selector';

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
