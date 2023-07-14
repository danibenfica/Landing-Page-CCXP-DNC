![lp-ccxp-online-video-cuttercom-1_h7NoCG98](https://github.com/danibenfica/Landing-Page-CCXP-DNC/assets/103818625/d5efc109-a1e1-4784-85f7-0d8a43886a60)

# Landing Page CCXP

[Link do projeto online aqui!](https://landing-page-ccxp-dnc-ruddy.vercel.app/)

## Descrição do Projeto
Este projeto é uma Landing Page para a CCXP (Comic Con Experience), um evento de cultura pop que acontece anualmente. A página promove o evento da CCXP física que ocorreu em dezembro de 2022, destacando as atrações e incentivando a participação dos visitantes.
O projeto tem objetivo 

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript


## Clonagem do Projeto
Para clonar o projeto, siga as instruções abaixo:

1. Abra o terminal e navegue até a pasta que você irá baixar o projeto.
2. Execute o seguinte comando para clonar o repositório:

   ```shell
   git clone https://github.com/danibenfica/Landing-Page-CCXP-DNC.git
   ```

3. Após a conclusão da clonagem, você terá acesso aos arquivos do projeto.

## Principais Funções

### countDown()
Esta função é responsável por realizar a contagem regressiva para o evento da CCXP. Ela calcula a diferença entre a data atual e a data do evento, em segundos, e converte essa diferença em dias, horas, minutos e segundos. Em seguida, atualiza o conteúdo HTML dos elementos correspondentes com os valores calculados.


```
function countDown() {
   const today = new Date()

   const segTotal = (eventDate - today)/1000;

   const days = Math.floor(segTotal / 60 / 60 / 24);
   const hours = Math.floor(segTotal / 60 / 60) % 24;
   const mins = Math.floor(segTotal / 60) % 60;
   const secs = Math.floor(segTotal) % 60;

   day.innerHTML = days < 10 ? `0${days}` : days;
   hour.innerHTML = time(hours)
   min.innerHTML = time(mins)
   sec.innerHTML = time(secs)
}

countDown();
setInterval(countDown, 1000);

```


### time(time)
Esta função auxiliar recebe um valor numérico de tempo (horas, minutos ou segundos) e retorna uma string formatada com dois dígitos. Isso garante que os valores exibidos na contagem regressiva sempre tenham dois dígitos, mesmo quando forem menores que 10.

```
function time (time) {
    return time < 10? `0${time}` : time;
}

```

### highlightCard(selector)
Esta função destaca um cartão específico na seção "thirdSection" quando o mouse passa sobre ele. Ela adiciona ou remove a classe CSS "card-highlight" no elemento correspondente.

```
function highlightCard(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}


```

### checkKeyboardCode()
Esta função exibe um alerta com o nome e o código da tecla pressionada quando uma tecla do teclado é pressionada. Ela é usada para fins de demonstração e teste.

```
function checkKeyboardCode() {
    document.addEventListener("keydown", (event) => {
        var name = event.key;
        var code = event.code;

        alert(`Key pressed: ${name} \r\n Key code value: ${code}`);
    },false); 
}

```

### addKeyboardEventListeners()
Esta função adiciona event listeners para as teclas "1", "2", "3" e "4" do teclado. Quando uma dessas teclas é pressionada, ela destaca o cartão correspondente na seção "thirdSection", removendo o destaque dos outros cartões.


```
function addKeyboardEventListeners() {
    document.addEventListener("keydown", (event) => {
        var ingresso1 = document.getElementById('Quinta');
        var ingresso2 = document.getElementById('Sexta');
        var ingresso3 = document.getElementById('Sabado');
        var ingresso4 = document.getElementById('Domingo');

        var code = event.code;

        if (code == "Digit1") {
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if (code == "Digit2"){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        if (code == "Digit3"){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        if (code == "Digit4"){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");
        }
 
    },false); 
}


```

### selectCard(selector)
Esta função seleciona ou desmarca um cartão específico na seção "thirdSection" quando o usuário clica nele. Ela adiciona ou remove a classe CSS "card-selected" no elemento correspondente e adiciona ou remove o seletor na matriz "ingressos" de acordo.

```
selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}


```

### showSelectedCards()
Esta função exibe um alerta com os ingressos selecionados até o momento. Ela é chamada quando o botão "GARANTA O SEU!" é clicado.

```
showSelectedCards = () => {
    if (ingressos.length > 0) alert(`Ingressos selecionados: ${ingressos}`);
}


```

## Conclusão
Esse projeto foi o primeiro mais desafiador de JavaScript e manipulação do DOM que fiz, e estou orgulhosa de te-lo concluído!
Apesar das dificuldades tive apoio dos meus professores, colegas de curso e também aprendi muito com as aulas!
Qualquer dúvida ou sugestão, sinta-se livre para me contatar! :heart: