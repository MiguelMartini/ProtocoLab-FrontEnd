export function gerarSenha(tamanho = 8) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const array = new Uint32Array(tamanho);
  crypto.getRandomValues(array);

  return Array.from(
    array,
    (valor) => caracteres[valor % caracteres.length],
  ).join("");
}
