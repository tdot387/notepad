import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  noteData!: Observable<any>;

  constructor(private firestore: Firestore) {
    this.getData();
  }

  uploadData(f: any) {
    const collectionInstance = collection(this.firestore, 'names');
    addDoc(collectionInstance, f.value);
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'names');
    collectionData(collectionInstance)
    .subscribe(val => {
      console.log(val);
      
    })

    this.noteData = collectionData(collectionInstance);
    
  }

}
