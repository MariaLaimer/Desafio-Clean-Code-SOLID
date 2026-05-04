const REGRAS = [
  {
    cond: (c, v) => c.tipo === 'premium'&& v > 1000 && c.anosCadastro > 5,
    valor: v => v * 0.20,
  },
  {
    cond: (c, v) => c.tipo === 'premium' && v > 1000 && c.anosCadastro <= 5,
    valor: v => v * 0.15,
  },
  {
    cond: (c, v) => c.tipo === 'premium' && v <= 1000 && v > 500,
    valor: v => v * 0.10,
  },
  {
    cond: (c, v) => c.tipo === 'premium' &&  v <= 500,
    valor: v => v * 0.05,
  },
  {
    cond: (c, v) => c.tipo === 'gold' &&  v > 1000,
    valor: v => v * 0.10,
  },
  {
    cond: (c, v) => c.tipo === 'gold' &&  v <= 1000,
    valor: v => v * 0.02,
  },
];

function calcularDesconto(cliente, valor) {
  const regra = REGRAS.find((r => r.cond(cliente, valor)));
  return regra ? regra.valor(valor) : 0;
}

module.exports = calcularDesconto;
