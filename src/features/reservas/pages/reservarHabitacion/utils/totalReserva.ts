export const totalReserva = (precio: number, dias: number) => {
  const valorReal = precio * 1000;
  return valorReal * dias;
};