import * as React from 'react';
import update from 'react-addons-update';
import { CropedShape } from './types';
import UpDrawing from './';
import Shape from './Shape';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';
import { DATAURL } from './image';

export default {
  title: 'Components/Inputs/UpDrawing',
  decorators: [withKnobs, getRootContainer('UpDrawing')],
  component: UpDrawing,
};

interface SimpleDrawingState {
  src: string;
  shapes?: Array<Shape>;
  images?: Array<string>;
}

class SimpleDrawing extends React.PureComponent<any, SimpleDrawingState> {
  constructor(props) {
    super(props);
    this.state = { src: DATAURL, shapes: [], images: [] };
  }

  onChange = (value: any, e: any) => {};

  onDelAll = (shapes: Array<any>) => {
    this.setState({ shapes: [] });
  };

  onDel = (shape: any) => {
    const _shapes = [];
    this.state.shapes.map(function (value) {
      if (value.ref != shape.ref) {
        _shapes.push(value);
      }
    });
    this.setState({ shapes: _shapes });
  };

  onCrop = (cropedShape: CropedShape) => {
    const newState = update(this.state, {
      //shapes : {$push : [cropedShape.shape]},
      images: { $push: [cropedShape.dataURL] },
    });
    this.setState(newState);
  };

  onRotate = (callback: (result: any) => void) => {};

  render() {
    return (
      <div>
        <h3>Découpage d'une ordonnance</h3>
        <p>
          Mise en oeuvre d'une utilisation du composant <code>UpDrawing</code> pour découper une ordonnance :
        </p>
        <UpDrawing
          key={'Main Drawing'}
          src={this.state.src}
          shapes={this.state.shapes}
          onCrop={this.onCrop}
          onDel={this.onDel}
          onDelAll={this.onDelAll}
          onRotate={this.onRotate}
          onChange={(value, event) => {
            console.log(event);
            console.log(value);
          }}
        />
        <p>
          {this.state.images &&
            this.state.images.map(function (value, index) {
              return <UpDrawing displayActions={false} src={value} key={`Drawing_${index}`} />;
            })}
        </p>
      </div>
    );
  }
}

export const General = () => (
  <div style={{ margin: '30px' }}>
    <SimpleDrawing />
  </div>
);
