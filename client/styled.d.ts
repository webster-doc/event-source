import 'styled-components';
import {primaryTheme} from "@app-theme";
type CustomTheme = typeof primaryTheme;

//Типизация темы
declare module "styled-components" {
    export interface DefaultTheme extends CustomTheme {}
}