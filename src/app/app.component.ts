import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  channelInitialized: boolean = false;
  
  constructor() 
  {
    if( !this.channelInitialized )
    {
      this.initChannel();
    }  
  }
  
  async initChannel()
  {
    const channel = {
                      id: "tiko_notifications",
                      name: "TiKo",
                      description: "TiKo reminder channel",
                      importance: 5,
                      lightColor: "#FFFFFF",
                      sound: "expiration.wav",                      
                      vibration: true                      
                    };
    await LocalNotifications.createChannel( channel );
    this.channelInitialized = true;    
  }
  
}
