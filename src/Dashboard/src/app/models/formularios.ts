export class formularios {
  tipo: number;
  titulo: string;
  nome: string;
  displayMessage:string


  constructor() {
    this.tipo = 0,
    this.titulo = ""
    this.nome = ""
    this.displayMessage = "displayMessage."+this.nome
  }
}
