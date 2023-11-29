import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myappsinapi.app',
  appName: 'myapp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
