/*const num: number = 13

if(num > 15){
    console.log('num maior que 15')
}else if(num === 15){
    console.log('num igual a 15')
}else {
    console.log('num menor que 15')
}*/

const typeUser ={
    admin: 'Seja bem vindo admin',
    student: 'Voce é um estudante',
    viewer: 'Voce pode visualizar'
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')
validateUser('viewer')