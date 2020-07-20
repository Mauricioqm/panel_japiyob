import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil-socio',
  templateUrl: './perfil-socio.component.html',
  styleUrls: ['./perfil-socio.component.sass']
})
export class PerfilSocioComponent implements OnInit {

  uid: any;
  usuario: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public userService: UserService,
    private http: HttpClient
  )
  {
    this.uid = this.activatedRoute.snapshot.params['uid'];
    console.log(this.uid);

    userService.getSocioById(this.uid).valueChanges().subscribe(data => {
      console.log(data);
      this.usuario = data;
    });
  }

  ngOnInit() {
  }

  pdfSrc = "https://firebasestorage.googleapis.com/v0/b/japiyob-1b78c.appspot.com/o/japiyobStorage%2F1589408071772_politicas_de_uso_de_cookies_-_caracol_television.pdf?alt=media&token=d9024a70-fe54-47d4-82f4-e682dc38df5a"
}
