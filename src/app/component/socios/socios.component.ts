import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.sass']
})
export class SociosComponent implements OnInit {

  socios: any;
  query = '';

  constructor(
    private userService: UserService,
    private firestore: AngularFirestore,
  )
  {
    this.userService.obtenerSocios().valueChanges().subscribe(data => {
      console.log(data);
      this.socios = data;
    });

  }

  ngOnInit() {
  }

}
