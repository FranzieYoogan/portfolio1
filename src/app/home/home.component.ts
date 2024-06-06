import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  
  star1() {

    const star1:any = document.getElementById('star1')
    const starButton1:any = document.getElementById('starButton1')


      star1.style.visibility = "visible"
      star1.style.opacity = "1"
      starButton1.style.visibility = "hidden"
      starButton1.style.opacity = "0"

    

  }
  
  
  star11() {

    const star1:any = document.getElementById('star1')
    const starButton1:any = document.getElementById('starButton1')

    star1.style.visibility = "hidden"
    star1.style.opacity = "0"
    starButton1.style.visibility = "visible"
    starButton1.style.opacity = "1"
  }


  star2() {

    const star2:any = document.getElementById('star2')
    const starButton2:any = document.getElementById('starButton2')


      star2.style.visibility = "visible"
      star2.style.opacity = "1"
      starButton2.style.visibility = "hidden"
      starButton2.style.opacity = "0"

    

  }
  
  
  star22() {

    const star2:any = document.getElementById('star2')
    const starButton2:any = document.getElementById('starButton2')

    star2.style.visibility = "hidden"
    star2.style.opacity = "0"
    starButton2.style.visibility = "visible"
    starButton2.style.opacity = "1"
  }

  star3() {

    const star3:any = document.getElementById('star3')
    const starButton3:any = document.getElementById('starButton3')


      star3.style.visibility = "visible"
      star3.style.opacity = "1"
      starButton3.style.visibility = "hidden"
      starButton3.style.opacity = "0"

    

  }
  
  
  star33() {

    const star3:any = document.getElementById('star3')
    const starButton3:any = document.getElementById('starButton3')

    star3.style.visibility = "hidden"
    star3.style.opacity = "0"
    starButton3.style.visibility = "visible"
    starButton3.style.opacity = "1"
  }

}
