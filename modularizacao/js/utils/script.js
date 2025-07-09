import { adicionarEventoBotao } from '../utils/utils.js'
import { calcularParimpar } from '../js/par_impar.js'
import { calcularMaiormenor } from '../js/maio_menor.js'
import { calcularVelocidade } from '../js/mot_vel.js'
import { calcularSalario } from '../js/salario.js'
import { calcularPassagem } from '../js/passagem.js'
import { calcularBissexto } from '../js/bisexto.js'
import { calcularTriangulo } from '../js/triangulo.js'

adicionarEventoBotao('parimpaBtn', calcularParimpar)
adicionarEventoBotao('maiormenorBtn', calcularMaiormenor)
adicionarEventoBotao('velocidadeBtn', calcularVelocidade)
adicionarEventoBotao('salarioBtn', calcularSalario)
adicionarEventoBotao('passagemBtn', calcularPassagem)
adicionarEventoBotao('bissextoBtn', calcularBissexto)
adicionarEventoBotao('trianguloBtn', calcularTriangulo)