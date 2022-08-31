class Caixa {
    constructor(){
        this.posicaoX = 100;
        this.posicaoY = 200;
        this.largura = 50;
        this.altura = 100;
    }

    mostrar(){
        rect(this.posicaoX, this.posicaoY, this.largura, this.altura);
    }
}