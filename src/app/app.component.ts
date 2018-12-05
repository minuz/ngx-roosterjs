import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-roosterjs-app';

  initialContent: string;

  ngOnInit() {
    this.initialContent = `http://server/cgi-bin/testcgi.exe?<SCRIPT>alert(“Cookie”+document.cookie)</SCRIPT>`;
  }

  save(rooster) {
    console.log(rooster);
  }
}
