// Aplicacao.ts
import { Livro } from "./livro";
import { Biblioteca } from "./biblioteca";
import { Ui } from "./ui";

export class Aplicacao {
  private biblioteca = new Biblioteca();
  private io = new Ui();

  iniciar() {
    let opcao = "";

    do {

      opcao =
        this.io.pedirTexto(
          " 📖 BIBLIOTECA ADS 📖\n" +
            "Escolha uma opção:\n" +
            "1. Cadastrar livro\n" +
            "2. Listar livros\n" +
            "3. Buscar livro\n" +
            "4. Remover livro\n" +
            "5. Sair\n"
        ) || "";


      if (!["1", "2", "3", "4", "5"].includes(opcao)) {
        alert("Escolha uma opção válida de 1 a 5.");
        continue;
      }

      switch (opcao) {
        case "1": {
          let titulo = this.io.pedirTexto("Título:")?.trim() || "";
          let autor = this.io.pedirTexto("Autor:")?.trim() || "";
          let anoTexto = this.io.pedirTexto("Ano de publicação:")?.trim() || "";
          let ano = Number(anoTexto);
          let paginas = Number(this.io.pedirTexto("Número de páginas:"));

          if (!titulo || !autor) {
            alert("Título e autor são obrigatórios!");
            break;
          }

          if (anoTexto.length > 4 || anoTexto.length < 4) {
            alert("O ano deve ter no máximo 4 algarismos, tente novamente!");
            break;
          }

          if (isNaN(ano) || isNaN(paginas) || ano <= 0 || paginas <= 0) {
            alert("Digite apenas números válidos(inteiros) para ano e páginas, tente novamente!");
            break;
          }

          let novoLivro = new Livro(titulo, autor, ano, paginas);
          this.biblioteca.adicionar(novoLivro);
          break;
        }

        case "2":
          this.biblioteca.listar();
          break;

        
        case "3": {
          let busca = this.io.pedirTexto("Digite o título do livro:")?.trim() || "";
          if (!busca) {
            alert("Digite um título válido para buscar, tente novamente!");
            break;
          }

          let livro = this.biblioteca.buscarPorTitulo(busca);
          if (livro) {
            this.io.mostrarTexto(
              ` ${livro.getTitulo()}\nAutor: ${livro.getAutor()}\nAno: ${livro.getAno()}\nPáginas: ${livro.getPaginas()}`
            );
          } else {
            this.io.mostrarTexto("Livro não encontrado. Tente novamente!");
          }
          break;
        }

        case "4": {
          let remover = this.io.pedirTexto("Digite o título do livro para remover:")?.trim() || "";
          if (!remover) {
            alert("Digite um título válido para remover, tente novamente!");
            break;
          }

          this.biblioteca.remover(remover);
          break;
        }

        case "5":
          alert("👋 Obrigado por utilizar minha biblioteca😍\nInté...");
          break;
      }
    } while (opcao !== "5");
  }
}
