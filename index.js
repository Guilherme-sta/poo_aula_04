"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(id, nome, cpf) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }
}
class Conta {
    constructor(id, numero, cliente, dataAbertura, saldoInicial) {
        this.id = id;
        this.numero = numero;
        this.cliente = cliente;
        this.dataAbertura = dataAbertura;
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    sacar(valor) {
        if (this.saldo > valor) {
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
let contas = [];
let conta1 = new Conta(1, '111-1', new Cliente(1, 'Ely', '825'), new Date(), 100);
contas[0] = conta1;
let conta2 = new Conta(2, '222-2', new Cliente(2, 'Maria', '222'), new Date(), 200);
contas.push(conta2);
//contas.push(new Conta(3, '333-3', 300));
/*console.log(contas);
console.log(contas[0].numero);*/
/*
CRUD - Create (Inserir), Read(consultar),
Update(Atualizar) e Delete(Excluir)
*/
class Banco {
    constructor() {
        this.contas = [];
    }
    inserir(conta) {
        this.contas.push(conta);
    }
    consultarPorNumero(numero) {
        let contaProcurada;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    }
    alterar(conta) {
        let contaProcurada;
        contaProcurada = this.consultarPorNumero(conta.numero);
        if (contaProcurada) {
            contaProcurada.cliente = conta.cliente;
            contaProcurada.dataAbertura = conta.dataAbertura;
            contaProcurada.saldo = conta.saldo;
        }
    }
    excluir(numero) {
        let indice = this.contas.findIndex(c => c.numero == numero);
        if (indice >= 0) {
            this.contas.splice(indice, 1);
        }
    }
}
let banco = new Banco;
banco.inserir(conta1);
banco.inserir(conta2);
console.log(banco.consultarPorNumero('111-1'));
console.log(banco.consultarPorNumero('555-5'));
let cliente = new Cliente(5, "pedro", "888");
let conta4 = new Conta(1, '111-1', cliente, new Date(), 1000);
console.log(banco.consultarPorNumero('111-1'));
banco.alterar(conta4);
let contaX = banco.consultarPorNumero('111-1');
console.log(contaX);
console.log(banco.consultarPorNumero('111-1'));
let conta5 = new Conta(6, '555-5', new Cliente(5, 'Joana', '578'), new Date(), 5000);
banco.inserir(conta5);
let conta7 = new Conta(7, '777-7', new Cliente(7, 'jonh', '7777'), new Date(), 70000);
banco.inserir(conta7);
console.log(banco.consultarPorNumero('777-7'));
//# sourceMappingURL=index.js.map