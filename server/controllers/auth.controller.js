/**
 * 
 * @param {*} rut 
 * @param {*} digv 
 * @returns tiene que ser cambiados por algo que nos sirva para después 
 */

//VALIDACIÓN RUT
const validaRut = (rut, digv) => {
  try {
    var rutdv = rut + "-" + digv;
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rutdv)) {
      return "El rut no cumple formato";
    }
    if (digv == "K") digv = "k";

    if (digitoV(rut) != digv) {
      return "dígito incorrecto"
    };
} catch (error) {
  console.log("algo anda mal rut " + error);
}
};
//VALIDACIÓN DÍGITO VERIFICADOR LLAMADO POR EL VERIFICADOR DE RUT
const digitoV = (rut) => {
  try {
    var M = 0,
      S = 1;
    for (; rut; rut = Math.floor(rut / 10)) {
      S = (S + (rut % 10) * (9 - (M++ % 6))) % 11;
    }
    return S ? S - 1 : "K";
  } catch (error) {
    console.log("algo anda mal dv " + error);
  }
};
// VALIDACIÓN CONTRASEÑAS IGUALE
const validaContra = (contrasena, rcontrasena) => {
  try {
    if (contrasena != rcontrasena) {
      return "Contraseñas no coinciden";
    }
    return true;
  } catch (error) {
    console.log("algo anda mal iguales" + error);
  }
};
//VALIDACIÓN LARGO MÍNIMO DE LA CONTRASEÑA
const validaLargoMin = (contrasena) => {
  try {
    if (contrasena.length < 4) {
     return "Contraseña demasiado corta, intente con mas de 4 caracteres";
    }

  } catch (error) {
    console.log("algo anda mal min" + error);
  }
};
//VALIDACIÓN LARGO MÁXIMO DE LA CONTRASEÑA
const validaLargoMax = (contrasena) => {
  try {
    if (contrasena.length > 10) {
      return "Contraseña demasiado larga, intente con menos de 11 caracteres";
    }
  } catch (error) {
    console.log("algo anda mal max" + error);
  }
};

module.exports = {
  validaRut,
  validaContra,
  validaLargoMax,
  validaLargoMin,
};
