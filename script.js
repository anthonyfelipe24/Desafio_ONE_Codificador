let textoCriptografado = document.getElementById("textoCodificado");
let campoTextoDescriptografado = document.getElementById(
  "textoDescriptografado"
);
let imagem = document.getElementById("imagemCaixaMensagem");
let textos = document.getElementById("itens");
let botaoCopiar = document.getElementById("copiarBotao");


const criptografarTexto = () => {
  esconderItens();

  valorParaCriptografar = textoCriptografado.value;
  valorCriptografado = valorParaCriptografar.replaceAll("e", "enter");
  valorCriptografado = valorCriptografado.replaceAll("i", "imes");
  valorCriptografado = valorCriptografado.replaceAll("a", "ai");
  valorCriptografado = valorCriptografado.replaceAll("o", "ober");
  valorCriptografado = valorCriptografado.replaceAll("u", "ufat");

  campoTextoDescriptografado.innerHTML = valorCriptografado;
  textoCriptografado.value = "";
};

const descriptograrTexto = () => {
  esconderItens();

  valorParaCriptografar = textoCriptografado.value;
  valorCriptografado = valorParaCriptografar.replaceAll("enter", "e");
  valorCriptografado = valorCriptografado.replaceAll("imes", "i");
  valorCriptografado = valorCriptografado.replaceAll("ai", "a");
  valorCriptografado = valorCriptografado.replaceAll("ober", "o");
  valorCriptografado = valorCriptografado.replaceAll("ufat", "u");

  campoTextoDescriptografado.innerHTML = valorCriptografado;
  textoCriptografado.value = "";
};

const esconderItens = () => {
  imagem.setAttribute("hidden", true);
  textos.style.visibility = "hidden";
  botaoCopiar.style.visibility = "visible";
};

const copiarTexto = () => {
  const campo = document.getElementById("textoDescriptografado").innerText;
  
  const inputTemp = document.getElementById("inputHidden");
  inputTemp.value = campo;
  document.body.appendChild(inputTemp);
  inputTemp.select();


  navigator.clipboard.writeText(inputTemp.value)
    .then(() => {
      alert("Texto copiado com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
    });
};
