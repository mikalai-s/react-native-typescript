import Expo from 'expo';
import App from './app';
import React, { Component } from 'react';
import { View } from 'react-native';

if (this.process && this.process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate();
}

Expo.registerRootComponent(App);
