import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {NavigationEnd, Router} from '@angular/router';
import {EleveService} from '../../service/eleve.service';
import {Eleve} from '../../model/Eleve.model';
import {faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons/faAddressCard';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  eleves: Eleve[];
  fapencil = faPencilAlt;
  facard = faAddressCard;
  fadelete = faTimes;
  constructor(private authServ: AuthenticationService,
              private router: Router,
              private eleveService: EleveService) {

}

  ngOnInit() {
    this.authServ.isLoggedIn.subscribe(res => {
      if (!res) {
        this.router.navigateByUrl('/login');
      }
      if (res) {
        setTimeout(() => this.eleveService.getListEleveNext10RDV(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res2 => {
          this.eleves = res2; }), 500);
      }
    });
  }

  openEleveDetails(element: Eleve) {
    this.router.navigateByUrl('eleveDetails', {state: element});
  }
  openEleveEdit(element: Eleve) {
    this.router.navigateByUrl('eleveEdit', {state: element});
  }
}
