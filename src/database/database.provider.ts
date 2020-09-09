import { FirebaseAdminCoreModule } from '@aginix/nestjs-firebase-admin';
import admin = require('firebase-admin');
const credentials = require('./firebaseCredentialsSDK.json');

export const firebaseApp = FirebaseAdminCoreModule.forRootAsync({
    useFactory: () => ({
      credential: admin.credential.cert(credentials),
      databaseURL: "https://unusual-minds-prueba.firebaseio.com"
    })
});