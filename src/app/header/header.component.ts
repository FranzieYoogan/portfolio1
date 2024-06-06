import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
      


  }

  click = 0
  showName() {
    const spanStyle:any = document.getElementById('spanStyle')
    this.click++

    if(this.click == 1) {

      spanStyle.style.right = "-0.1em"
      spanStyle.style.transition = "1s"
      spanStyle.style.visibility = "visible"
      spanStyle.style.opacity = "1"
  

    } else {
      this.click = 0
      spanStyle.style.right = "0.3em"
      spanStyle.style.transition = "1s"
      spanStyle.style.visibility = "hidden"
      spanStyle.style.opacity = "0"
    }

  }

}
