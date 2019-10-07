import { Component, OnInit } from '@angular/core';
import {Structure} from '../../model/Structure.model';
import {AuthenticationService} from '../../service/authentication.service';
import {StructureService} from '../../service/structure.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public structures: Structure[] ;
  constructor(private authServ: AuthenticationService, private structureServ: StructureService, private router: Router) { }

  ngOnInit() {
    this.structureServ.getListStructure().subscribe(
      struct => {this.structures = struct;
      },
      err => {
        this.authServ.logout();
        this.router.navigateByUrl('/login');
      });
  }
}
