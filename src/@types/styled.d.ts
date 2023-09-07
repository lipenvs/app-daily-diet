import { myTheme } from '@/theme';
import 'styled-components/native'

declare module 'styled-components/native' {
  type ThemeType = typeof myTheme;
  export interface DefaultTheme extends ThemeType {}
}