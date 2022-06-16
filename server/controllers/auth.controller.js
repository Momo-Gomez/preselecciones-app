//VALIDACION RUT
const validarut = async (rut, digv, errors) => {
  try {
    var rutdv = rut + "-" + digv;
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rutdv)) {
      errors.push({
        text: "El rut no cumple formato",
      });
      return false;
    }
    //if (digv == "K") digv = "k";
    if (digitoV(rut, errors) != digv) {
      errors.push("dígito incorrecto");
      return false;
    }
    return true;
  } catch (error) {
    res.status(500).json(error);
  }
};
//VALIDACION DIGITO VERIFICADOR
const digitoV = (rut, errors) => {
  try {
    var M = 0,
      S = 1;
    for (; rut; rut = Math.floor(rut / 10)) {
      S = (S + (rut % 10) * (9 - (M++ % 6))) % 11;
    }
    return S ? S - 1 : "K";
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  validarut,
};
