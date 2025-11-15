export const formatearFechas = (entrada: any, salida: any) => {
  if (!entrada || !salida)
    return { textoFechas: "Fechas no seleccionadas", textoNoches: "" };

  const cap = (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1);

  const fechaInicio = new Date(entrada.$d);
  const fechaFin = new Date(salida.$d);


  const diferenciaMs = fechaFin.getTime() - fechaInicio.getTime();
  const noches = Math.round(diferenciaMs / (1000 * 60 * 60 * 24));

  const opcionesMes = { month: "long" } as const;
  const mesInicio = fechaInicio.toLocaleString("es-ES", opcionesMes);
  const mesFin = fechaFin.toLocaleString("es-ES", opcionesMes);

  let textoFechas;
  if (mesInicio === mesFin) {
    textoFechas = `${fechaInicio.getDate()} - ${fechaFin.getDate()} de ${cap(mesFin)}`;
  } else {
    textoFechas = ` ${fechaInicio.getDate()} de ${cap(mesInicio)} - ${fechaFin.getDate()} de ${cap(mesFin)}`;
  }

  const textoNoches = noches === 1 ? "1 noche" : `${noches} noches`;

  return { textoFechas, textoNoches,noches };
};
