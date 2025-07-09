import { adicionarEventoBotao } from './utils/utils.js';
import { calcularParimpar } from './modulos/par_impar.js';
import { calcularMaiormenor } from './modulos/maior_menor.js';
import { calcularVelocidade } from './modulos/mot_vel.js';
import { calcularSalario } from './modulos/salario.js';
import { calcularPassagem } from './modulos/passagem.js';
import { calcularBissexto } from './modulos/bisexto.js';
import { calcularTriangulo } from './modulos/triangulo.js';

adicionarEventoBotao('parimpaBtn', calcularParimpar);
adicionarEventoBotao('maiormenorBtn', calcularMaiormenor);
adicionarEventoBotao('velocidadeBtn', calcularVelocidade);
adicionarEventoBotao('salarioBtn', calcularSalario);
adicionarEventoBotao('passagemBtn', calcularPassagem);
adicionarEventoBotao('bissextoBtn', calcularBissexto);
adicionarEventoBotao('trianguloBtn', calcularTriangulo);