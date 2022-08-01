import { Component } from 'react';
import {
  BackHandler,
  HWKeyEvent,
  Platform,
  TVEventHandler,
} from 'react-native';

class FocusService {
  private _tvEventHander: TVEventHandler;
  private _activeRoute = '';
  private _previousActiveRoute?: string;
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
    console.log('[FocusService] Creating instance with tv event handler');

    this._tvEventHander = new TVEventHandler();
    this._tvEventHander.enable(undefined, this._handleTVEvent);
    BackHandler.addEventListener('hardwareBackPress', this._handleBack);
  }

  private _handleTVEvent = (
    _component: Component<unknown>,
    data: HWKeyEvent,
  ) => {
    if (data.eventType !== 'focus') {
      return;
    }

    if (this._focusedTag[this._activeRoute] !== data.tag) {
      this._focusedTag[this._activeRoute] = data.tag || null;

      console.log(
        `[FocusService][${this._activeRoute}] Focus detected, tag: ${this.focusedTag}`,
      );
    }
  };

  public set activeRoute(route: string) {
    if (this._activeRoute === route) {
      return;
    }

    this._previousActiveRoute = this._activeRoute;
    this._activeRoute = route;

    if (this._previousActiveRoute) {
      console.log(
        `[FocusService][${this._activeRoute}] Active route changed, last known focused tag: ${this.focusedTag}`,
      );
    }
  }

  private _handleBack = () => {
    if (this._previousActiveRoute) {
      this.activeRoute = this._previousActiveRoute;
    }

    return false;
  };

  public get focusedTag() {
    if (!this._activeRoute) {
      return null;
    }

    return this._focusedTag[this._activeRoute] || null;
  }
}

export default FocusService;
