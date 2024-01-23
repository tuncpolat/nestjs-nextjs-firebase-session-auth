import { Injectable } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';


@Injectable()
export class FirebaseService {
    private firebaseApp: admin.app.App;

  constructor(private configService: ConfigService) {
    if (!admin.apps.length) {
        this.firebaseApp = admin.initializeApp({
          credential: admin.credential.cert({
            projectId: this.configService.get('fbProjectId'),
            clientEmail: this.configService.get('fbClientEmail'),
            privateKey: this.configService
              .get('fbPrivateKey')
              .replace(/\\n/g, '\n'),
          })
        })
      } else {
        this.firebaseApp = admin.app();
      }
  }

  getAuth() {
    return this.firebaseApp.auth();
  }
}