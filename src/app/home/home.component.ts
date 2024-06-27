import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, RecaptchaModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  // export class ModalComponent {
  //   constructor(private el: ElementRef) {}

  //   // Escucha clics en el documento
  //   @HostListener('document:click', ['$event'])
  //   onDocumentClick(event: MouseEvent): void {
  //     // Verifica si el clic fue fuera del elemento del modal
  //     if (!this.el.nativeElement.contains(event.target)) {
  //       this.closeModal();
  //     }
  //   }

  //   closeModal(): void {
  //     // Aquí tu lógica para cerrar el modal, por ejemplo, cambiar una variable de estado
  //     console.log('Modal cerrado');
  //   }
  // }
  public showModal = true;
  public reCaptchaV3Service = inject(ReCaptchaV3Service)

  executeReCaptchaV3(): void {
    console.log("object");
    this.reCaptchaV3Service.execute('')
      .subscribe((token) => {
        console.log(token);
      });
  }

  executeRecaptchaVisible(token: any): void {
    console.log(token);

  }

  continuar(): void {
    this.showModal = false;
  }

  rechazar(): void {
    this.showModal = false;
  }
}
