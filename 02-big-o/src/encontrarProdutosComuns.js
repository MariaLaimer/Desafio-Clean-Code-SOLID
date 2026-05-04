/**
 * OTIMIZAÇÃO O(n²):Loop Duplo Aninhado --> para O(n): Busca Sequencial.
 */
function encontrarProdutosComuns(listaA, listaB) {
  const operacaoListaB = new Set(listaB);
  return listaA.filter(i => operacaoListaB.has(i));
}

module.exports = encontrarProdutosComuns;
