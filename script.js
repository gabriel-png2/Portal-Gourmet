let show = true;
const menuContent = document.querySelector('.custom-content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

const pratos = [  {    nome: "Filé com fritas",    imagem: "https://jcconcursos.com.br/media/_versions/noticia/prato-feito_1_widelg.jpg",    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam asperiores repellendus quasi vel ipsam molestias fugit atque qui deserunt"  },  {    nome: "Shusui",    imagem: "https://www.elevenrio.com.br/storage/2020/01/assorted-japanesse-food-2323398.jpg",    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam asperiores repellendus quasi vel ipsam molestias fugit atque qui deserunt"  },  {    nome: "Vatapá",    imagem: "https://www.otempo.com.br/image/contentid/policy:1.2466840:1617289984/bacalhau-gomes-sa-sexta-feira-santa-receita-facil-gostoso-paixao-jpeg.jpeg?f=3x2&w=1224",    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam asperiores repellendus quasi vel ipsam molestias fugit atque qui deserunt"  },  {    nome: "Feijoada",    imagem: "https://blog.biglar.com.br/wp-content/uploads/2021/10/typical-brazilian-dish-called-feijoada-made-with-black-beans-pork-sausage.jpg",    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam asperiores repellendus quasi vel ipsam molestias fugit atque qui deserunt"  },  {    nome: "Indisponível",    imagem: "https://cdn-icons-png.flaticon.com/512/8634/8634777.png",    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam asperiores repellendus quasi vel ipsam molestias fugit atque qui deserunt" }, {    nome: "Indisponível",    imagem: "https://cdn-icons-png.flaticon.com/512/8634/8634777.png",    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam asperiores repellendus quasi vel ipsam molestias fugit atque qui deserunt"},  {    nome: "Indisponível",    imagem: "https://cdn-icons-png.flaticon.com/512/8634/8634777.png",    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam asperiores repellendus quasi vel ipsam molestias fugit atque qui deserunt"},  {    nome: "Indisponível",    imagem: "https://cdn-icons-png.flaticon.com/512/8634/8634777.png",    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam asperiores repellendus quasi vel ipsam molestias fugit atque qui deserunt"}];

const cardapioContainer = document.getElementById("cardapio-container");

pratos.map((prato, index) => {
  const div = document.createElement("div");
  div.className = `card-cardapio b${index + 1}`;

  const img = document.createElement("img");
  img.src = prato.imagem;
  img.alt = "Imagem de exemplo";
  div.appendChild(img);

  const h2 = document.createElement("h2");
  h2.innerText = prato.nome;
  div.appendChild(h2);

  const p = document.createElement("p");
  p.className = "descricao-prato";
  p.innerText = prato.descricao;
  div.appendChild(p);

  const button = document.createElement("button");
  button.className = "button-carrinho";
  button.innerText = "Ver opções";
  div.appendChild(button);

  cardapioContainer.appendChild(div);
});
