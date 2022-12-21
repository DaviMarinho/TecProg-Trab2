const CalculadoraIRPF = require('./calculadora');

let calculadora;

beforeEach(() => {
    calculadora = new CalculadoraIRPF();
});

test('Cadastro de rendimento', () => {
    calculadora.cadastrarRendimento("Salario", 5000);
    expect(calculadora.obterTotalRencimentos()).toBe(5000);
})


describe('Cadastro de Deduções', () => {
  beforeEach(() => {
    calculadora = new CalculadoraIRPF();
  });

  it.each([
    [["Salario", 5000], [5000, [ { valor: 5000, descricao: "Salario" } ]]],
    [["Salario", 7500], [7500, [ { valor: 7500, descricao: "Salario" } ]]],
    [["Salario", 11000], [11000, [ { valor: 11000, descricao: "Salario" } ]]],
  ])("Teste parametrizado de cadastro de deduções", (inputValue, result) => {
    calculadora.cadastrarDeducao(inputValue[0], inputValue[1]);

    expect(calculadora.obterTotalDeducoes()).toBe(result[0]);
    expect(calculadora.obterListaDeducoesGerais()).toEqual(result[1]);
  });
});