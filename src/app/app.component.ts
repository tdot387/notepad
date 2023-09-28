import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  title = 'notepad';

  constructor(private firestore: Firestore) {}

  uploadData(f: any) {
    const collectionInstance = collection(this.firestore, 'names');
    addDoc(collectionInstance, f.value);
  }

}
