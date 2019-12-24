import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
})
export class DatabindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = "https://f.i.uol.com.br/fotografia/2019/03/15/15526795065c8c025270c53_1552679506_4x3_lg.jpg";
  public nome: string = "";

  adicionarClique() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  // KeyUp(event: any) {
  //   this.nome = event.target.value;
  // }
}
