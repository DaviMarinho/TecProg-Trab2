class CalculadoraIRPF {
  constructor() {
    this.listaDeducoes = [];
    this.totalDeducao = 0;
  }

  cadastrarDeducao(descricao, valor) {
    if (!descricao) throw new Error('DescricaoEmBrancoException');
    if (!valor || valor < 0) throw new Error('ValorDeducaoInvalidoException');

    this.listaDeducoes.push({
      valor,
      descricao
    })

    this.totalDeducao = valor;
  };

  obterTotalDeducoes() {
    return this.totalDeducao;
  }

  obterListaDeducoesGerais() {
    return this.listaDeducoes;
  }
}

module.exports = CalculadoraIRPF;