class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    };
    calculaCategoria() {
        if(this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        }
        if(this.idade == 12 && this.idade == 13) {
            return "Juvenil"
        }
        if(this.idade == 14 && this.idade == 15) {
            return "Intermediário"
        }
        if(this.idade >= 16 && this.idade <= 30) {
            return "Adulto"
        }
        else {
            return "Sem categoria"
        }
    };
    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    };
    calculaMediaValida() {
        let notasGeral = this.notas
        let notasOrganizado = notasGeral.sort(function comparacao(a, b) {
            if(a == b) {
                return 0
            };
            if(a < b) {
                return -1
            };
            if(a > b) {
                return 1
            };
        });
        let notasValido = notasOrganizado.slice(1, 4);
        let somaValido = notasValido.reduce(function(total, atual) {
            return total + atual
        });
        let media = (somaValido / somaValido.length)
        return media
    };
    obtemNomeAtleta() {
        return `Nome: ${this.nome}`
    };
    obtemIdadeAtleta() {
        return `Idade: ${this.idade}`
    };
    obtemPesoAtleta() {
        return `Peso: ${this.peso}`
    };
    obtemNotasAtleta() {
        return `Notas: ${this.notas}`
    };
    obtemCategoria() {
        return `Categoria: ${this.calculaCategoria()}`
    };
    obtemIMC() {
        return `IMC: ${this.calculaIMC()}`
    };
    obtemMediaValida() {
        return `Média válida: ${this.calculaMediaValida()}`
    };
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

    console.log(atleta.obtemNomeAtleta())
    console.log(atleta.obtemIdadeAtleta())
    console.log(atleta.obtemPesoAtleta())
    console.log(atleta.obtemNotasAtleta())
    console.log(atleta.obtemCategoria())
    console.log(atleta.obtemIMC())
    console.log(atleta.obtemMediaValida())
    