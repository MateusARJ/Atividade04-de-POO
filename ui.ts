export class Ui {
  pedirTexto(mensagem: string) {
    return prompt(mensagem);
  }

  mostrarTexto(texto: string) {
    alert(texto);
  }
}
