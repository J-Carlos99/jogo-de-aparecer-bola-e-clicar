Function addbola(){
    Var bola=document.createElement(“div”);
    Bola.setAttribute(“class”, “bola”);
    //para aparecer aleatório
    //math.floor arredonda o número
    Var p1= math.floor(math.random() * 500);
    Var p2= math.floor(math.random() * 500);
     Bola.setAttribute(“style”, “left:” +p1+ “px; top:” +p2+ “p2;”);
     //para o balão sumir
     Bola.setAttribute(“onclick”, “estourar(this)”);
     //para aparecer na tela
     Document.body.appendChild(bola);
}
Function estourar(el){
    //para remover o elemento da tela
    Document.body.removerChild(el);
}
//evento de página
Function iniciar(){
    //uma coisa bai ser esecutada ate um serto tempo
        //addola quando eu esecutar a página a cada 1000 
    setInteval(addola, 1000);
}

