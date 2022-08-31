var caixinha;

function setup() 
{
  createCanvas(400, 400);

  caixinha = new Caixa();

}

function draw() 
{
  background(220);

  caixinha.mostrar();
}

