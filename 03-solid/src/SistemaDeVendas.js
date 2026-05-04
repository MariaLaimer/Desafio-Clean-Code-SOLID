class CalcularProduto {
  calcularDesconto(itens) {
    let total = 0;
    for (const item of itens) total += item.preco * item.quantidade;
    if (total > 1000) total *= 0.9;
    return total;
  }
}

class PedidoRepository {
  salvar(pedido) {
    console.log(`Salvando pedido ${pedido.id}...`);
  }
}

class EmailService {
  notificar(pedido) {
    console.log(`Enviando e-mail para ${pedido.clienteEmail}...`);
  }
}

class SistemaDeVendas {
  constructor(
    calculadora = new CalcularProduto(),
    repository = new PedidoRepository(),
    email = new EmailService()
  ) {
    this.calculadora = calculadora;
    this.repository = repository;
    this.email = email;
  }

  async processarVenda(pedido) {
    if (!pedido.itens || pedido.itens.length === 0) throw new Error("Pedido sem itens");

    let total = this.calculadora.calcularDesconto(pedido.itens);
    this.repository.salvar(pedido);
    this.email.notificar(pedido);
    return { ...pedido, total, status: "pago" };
  }
}

module.exports = SistemaDeVendas;
