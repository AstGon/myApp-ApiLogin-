import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myappsinapi.app',
  appName: 'myappsinapi',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
