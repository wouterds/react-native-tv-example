import { Route } from 'components/App/Navigation';
import { Component } from 'react';
import {
  BackHandler,
  HWEvent,
  Platform,
  TVEventControl,
  TVEventHandler,
} from 'react-native';

class FocusService {
  private _tvEventHander: TVEventHandler;
  private _activeRoute = '';
  private _focusedTag: Record<string, number | null> = {};
  private static _instance: FocusService;

  public static get instance() {
    if (!Platform.isTV) {
      return null;
    }

    if (!this._instance) {
      this._instance = new FocusService();
    }

    return this._instance;
  }

  private constructor() {
    TVEventControl.enableTVMenuKey();
    this._tvEventHander = new TVEventHandler();
    this._tvEventHander.enable(undefined, this._handleTVEvent);
    BackHandler.addEventListener('hardwareBackPress', this._handleBack);
  }

  private _handleTVEvent = (_component: Component<unknown>, data: HWEvent) => {
    if (data.eventType !== 'focus') {
      return;
    }

    if (this._focusedTag[this._activeRoute] !== data.tag) {
      this._focusedTag[this._activeRoute] = data.tag || null;

      console.log(
        `[services/focus][${this._activeRoute}] Focused tag: ${this.focusedTag}`,
      );
    }
  };

  public set activeRoute(route: string) {
    if (this._activeRoute === route) {
      return;
    }

    this._activeRoute = route;

    if (this.focusedTag) {
      console.log(
        `[services/focus][${this._activeRoute}] Previous focused tag: ${this.focusedTag}`,
      );
    }

    // on these screens the user can exit the app
    if ([Route.Discover].includes(route as Route)) {
      TVEventControl.disableTVMenuKey();
      console.log(
        `[services/focus][${this._activeRoute}] TVEventControl: disabled (menu button = exit)`,
      );
      // everywhere else the user can navigate back to the previous screen
    } else {
      TVEventControl.enableTVMenuKey();
      console.log(
        `[services/focus][${this._activeRoute}] TVEventControl: enabled (menu button = back)`,
      );
    }
  }

  private _handleBack = () => {
    this.clearFocusedTag();

    return false;
  };

  public get focusedTag() {
    if (!this._activeRoute) {
      return null;
    }

    return this._focusedTag[this._activeRoute] || null;
  }

  public clearFocusedTag(route?: string) {
    console.log(`[services/focus][${this._activeRoute}] Clearing focused tag`);

    this._focusedTag[route || this._activeRoute] = null;
  }
}

export default FocusService;
