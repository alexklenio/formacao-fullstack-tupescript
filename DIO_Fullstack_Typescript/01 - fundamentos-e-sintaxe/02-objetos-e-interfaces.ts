interface Pessoa{
    nome: string,
    idade: number
    profissao?: string
    
}

const pessoa: Pessoa = {
    nome: 'Alex',
    idade: 37
}

const outraPessoa: Pessoa = {
    nome: 'Kauã',
    idade: 8,
    profissao: 'Estudante'
};

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number [] = [
    1,2,3
]

const arrayString: Array<string> = [
    '1', '2', '3', '4'
]