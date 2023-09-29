import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  constructor(private firestore: Firestore) {}

  uploadData(f: any) {
    const collectionInstance = collection(this.firestore, 'names');
    addDoc(collectionInstance, f.value);
  }

}
