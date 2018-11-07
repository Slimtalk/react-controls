// Imports
import * as React from 'react';

import { Margin } from '../Paragraph';
import { getStyles } from './styles';
// Exports
export type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' ;

export interface UpHeadingProps {
  color?: string;
  textAlign?: string;
  tag?: Tag;
  truncate?: boolean;
  upcase?: boolean;
  margin?: Margin;
}

export default class UpHeading extends React.Component<UpHeadingProps> {
  
  public static defaultProps: UpHeadingProps = {
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'center',
    tag: 'h1',
    truncate: false,
    upcase: false,
    margin: 'medium',
  };

  public render() {
    const { children, tag } = this.props;
    return React.createElement(tag, {
      className: getStyles(this.props),
    }, children) ;
  }
}
