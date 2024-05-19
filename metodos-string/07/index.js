const validarEmail = (email) => {
  let emailValido = true;

  if (
    email.indexOf("@") < 0 ||
    email.indexOf(".") < 0 ||
    email.indexOf(".") === 0 ||
    email.lastIndexOf(".") === email.length - 1
  ) {
    emailValido = false;
  }

  console.log(emailValido ? "email válido" : "email inválido");
};

validarEmail("jose@cubos.academy"); //valido
validarEmail("jose@cubos.academy.br"); //valido
validarEmail("jose.messias@cubos.academy"); //valido
validarEmail("jose.messias@cubos.io"); //valido
validarEmail("jose@cubos"); //invalido
validarEmail("jose.messias@cubos"); //valido
validarEmail("jose.messias@."); //invalido
validarEmail("jose.@cubos"); //valido
validarEmail(".@"); //invalido
validarEmail("@."); //invalido
validarEmail("jose.messias@cubos."); //invalido
validarEmail(".messias@cubos."); //invalido
validarEmail(".messias@cubos"); //invalido
