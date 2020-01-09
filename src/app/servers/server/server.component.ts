import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(  private serversService: ServersService, 
                private route: ActivatedRoute, 
                private router: Router ) { }

  ngOnInit() {
      const id = +this.route.snapshot.params['id']; // FRONT PLUS sign will help to convert this as a numeric data
      this.server = this.serversService.getServer(id);
      this.route.params
        .subscribe(
          (params: Params) => {
           this.server = this.serversService.getServer(+params['id']);
        }
      );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}) // relative to will nevigate to the same url
  }

}
