import colorMap from './colorMap';
import iconMap from './iconMap';
import typography from './typography';

import { ThemeInterface } from './types';

import { ThemeProvider as UpThemeProvider } from './ThemeProvider'
import { Dictionary } from '../utils/types';
import { NestedCSSProperties } from 'typestyle/lib/types';

const defaultStyles = new Dictionary<string, NestedCSSProperties>([{
  key : 'input', value : {
    color: '#354052',
    borderColor: '#979797',
    $nest : {
      '.up-input-group svg, .up-input-group svg path, .up-input-group svg polygon' : {
        fill : '#979797'
      }
    }
  }}]) ;

const defaultTheme: ThemeInterface = {
  colorMap: colorMap,
  inputBorderLess: true,
  gridGutter: 30,
  intentTypeIcons : iconMap,
  typography : typography,
  styles : defaultStyles,
}

export { UpThemeProvider, ThemeInterface as UpThemeInterface, colorMap as UpThemeColorMap  } 

export default defaultTheme ;
