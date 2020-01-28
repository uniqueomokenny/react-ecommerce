import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../colection-preview/colection-preview';
import { selectShopCollections } from '../../redux/sop/shop.selector';

import './collection-overview.styles.scss';

function CollectionOverview({ collections }) {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);
