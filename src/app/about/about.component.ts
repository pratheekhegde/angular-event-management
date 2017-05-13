import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
    open: Boolean = false;
    constructor(
        private titleService: Title,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.titleService.setTitle(this.route.snapshot.data.title);
    }
}
