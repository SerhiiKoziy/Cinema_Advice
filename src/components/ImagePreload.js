import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { onImageLoad, addTotalLoadImages } from '../actions';

class ImagePreload extends React.Component {

  componentDidMount(){
    this.props.addTotalLoadImages(this.props.loadKey, this.props.source.uri)
  }
  onImageLoad(){
    this.props.onImageLoad(this.props.loadKey, this.props.source.uri)
  }
  render() {
    return (
      <Image
        key={this.props.source.uri}
        {...this.props}
        onLoadEnd={this.onImageLoad.bind(this)}
      />
    );
  }
}

const ConnectedComponent = connect(
  null,
  { onImageLoad, addTotalLoadImages }
)(ImagePreload);

export default ConnectedComponent;
