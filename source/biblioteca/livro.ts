export class Livro {
  private titulo: string;
  private autor: string;
  private ano: number;
  private paginas: number;

  constructor(t: string, a: string, ano: number, p: number) {
    this.titulo = t;
    this.autor = a;
    this.ano = ano;
    this.paginas = p;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getAutor(): string {
    return this.autor;
  }

  getAno(): number {
    return this.ano;
  }

  getPaginas(): number {
    return this.paginas;
  }
}
