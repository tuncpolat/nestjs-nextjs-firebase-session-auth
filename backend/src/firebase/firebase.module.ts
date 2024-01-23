import { Global, Module } from "@nestjs/common";
import { FirebaseService } from "./firebase.service";

@Global() // When you want to provide a set of providers which should be available everywhere out-of-the-box
@Module({
    providers: [FirebaseService],
    exports: [FirebaseService]
})

export class FirebaseModule {}