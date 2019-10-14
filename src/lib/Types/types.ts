import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export type INavigation = NavigationScreenProp<NavigationState, NavigationParams>;

export type defaultObject = {
  [key:string]: any
}