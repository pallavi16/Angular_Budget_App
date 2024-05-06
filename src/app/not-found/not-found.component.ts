import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

 @Input() visible: boolean = false;
 @Input() notFound: string = 'No Data found';
 @Input() resetLink: string = 'Reset';
 @Input() resetLinkRoute: string = '/';
}
