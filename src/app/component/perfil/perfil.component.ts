import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit {

  uid: any;
  usuario: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public userService: UserService,
  )
  {
    this.uid = this.activatedRoute.snapshot.params['uid'];
    console.log(this.uid);

    userService.getUserById(this.uid).valueChanges().subscribe(data => {
      console.log(data);
      this.usuario = data;
    });
  }

  ngOnInit() {
  }

}
