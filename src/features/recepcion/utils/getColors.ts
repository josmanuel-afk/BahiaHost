export const getBorderColor = (estado:string):string=> {
    switch (estado) {
      case "disponible":
        return "#10B981";
      case "ocupada":
        return "#4F46E5";
      case "limpieza":
        return "#ED6C02 ";
      case "mantenimiento":
        return "red";
      default:
        return "grey.400";
    }
  };
