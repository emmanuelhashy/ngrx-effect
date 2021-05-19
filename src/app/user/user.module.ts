
import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserEffects } from "./user.effect";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule, Action } from "@ngrx/store";
import { UserReducers } from "./user.reducers";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forFeature("featureUsers", UserReducers),
    EffectsModule.forFeature([UserEffects]),
    HttpClientModule
  ],
  exports: [UserComponent],
  declarations: [UserComponent],
  providers: []
})
export class UserModule {}
