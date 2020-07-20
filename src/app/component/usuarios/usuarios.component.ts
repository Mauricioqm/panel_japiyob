import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.sass']
})
export class UsuariosComponent implements OnInit {

  usuarios: any;
  query = '';

  constructor(
    private userService: UserService,
    private firestore: AngularFirestore,
  )
  {
    this.userService.obtenerUsuarios().valueChanges().subscribe(data => {
      console.log(data);
      this.usuarios = data;
    });

  }

  ngOnInit() {
  }

}
