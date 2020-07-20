import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.sass']
})
export class ServiciosComponent implements OnInit {

  servicios: any;

  constructor
  (
    private firestore: AngularFirestore,
  )
  { }

  ngOnInit() {

    this.firestore.collection('codigos').snapshotChanges().subscribe(data => {
      this.servicios = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          categoria:  e.payload.doc.data()['categoria'],
          ciudad:  e.payload.doc.data()['ciudad'],
          fechaServicio:  e.payload.doc.data()['fechaServicio'],
          nombres:  e.payload.doc.data()['nombres'],
          pago:  e.payload.doc.data()['pago'],
          servicio:  e.payload.doc.data()['servicio'],
          tiempo:  e.payload.doc.data()['tiempoa'],
          uid:  e.payload.doc.data()['uid'],
          valor:  e.payload.doc.data()['valor'],
        };
      });
      console.log(this.servicios);
    });
  }

}
