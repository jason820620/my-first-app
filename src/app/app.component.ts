import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h1 {
  //     color: darkblue;
  //   }
  // `]
})
export class AppComponent {
  // title = 'My First App';
    serverElements = [{ type: 'server', name: 'TesrServer', content: 'Just a test'}];

    onServerAdded(serverData: {serverName: string, serverContent: string}) {
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      })
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }
}
