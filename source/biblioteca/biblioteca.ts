import { Livro } from "./livro";

export class Biblioteca {
  private livros: Array<Livro> = []; 

  adicionar(livro: Livro) {
    this.livros.push(livro);
    alert("📚 Livro adicionado com sucesso!");
  }

  listar() {
    if (this.livros.length === 0) {
      alert("Nenhum livro cadastrado.");
      return;
    }

    let texto = "📚 Lista de livros:\n";
    this.livros.forEach((l, i) => {
      texto += `\nTítulo: ${l.getTitulo()} - Autor: ${l.getAutor()} - Ano de publicação: ${l.getAno()} - ${l.getPaginas()} páginas`;
    });
    alert(texto);
  }

  buscarPorTitulo(titulo: string): Livro | null {
    let livro = this.livros.find(l => l.getTitulo().toLowerCase() === titulo.toLowerCase());
    return livro || null;
  }

  remover(titulo: string) {
    let indice = this.livros.findIndex(l => l.getTitulo().toLowerCase() === titulo.toLowerCase());
    if (indice >= 0) {
      this.livros.splice(indice, 1);
      alert("Livro removido com sucesso!");
    } else {
      alert("Livro não encontrado!");
    }
  }
}
