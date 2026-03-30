import { Component } from '@angular/core';
import { Clinica } from './clinica';

@Component({
  selector: 'app-rede-credenciada',
  imports: [],
  templateUrl: './rede-credenciada.component.html',
  styleUrl: './rede-credenciada.component.css',
})
export class RedeCredenciadaComponent {

  clinicas: Clinica[] = [
  {
    nome: "INST. DE NEUROLOGIA",
    endereco: "710/910 EDIFICIO VIA BRASIL, LOJA 21 A TERREO.",
    telefones: "3245-1595, 3245-1599"
  },
  {
    nome: "CLINICA NEUROMASTER",
    endereco: "AV. CASTANHEIRAS, RUA 36 NORTE, LT 05, LJ09, 2º PISO – SHOPPING QUÊ/ ÁGUAS CLARAS.",
    telefones: "3436-0707, 3575-9750",
    especialidades: "Neurologia, Neuropediatra, Psiquiatra, Endocrinologia, Geriatria, Alergologia, Imunologia, Exames Neurológicos"
  },
  {
    nome: "CLINICA LAGARES",
    endereco: "RUA 13 NORTE LOTES 01 e 03, RUA 14 NORTE LOJAS 151, 152 AGUAS CLARAS – DF.",
    telefones: "61-99255-6988"
  },
  {
    nome: "CENTRO CLINICO AMMA",
    endereco: "AV. ARAUCARIAS LT 785 1º ANDAR",
    telefones: "3356-0149, 3356-0012",
    especialidades: "Psiquiatria, Psicologia, Mastologia, Angiologista"
  },
  {
    nome: "NÚCLEOS - CENTRO DE MEDICINA NUCLEAR",
    endereco: "ED. ADVANCE SGAS QD. 915 CONJ N SL 153 a 156 TERREO ASA SUL.",
    telefones: "3031-7200, 99108-6796"
  },
  {
    nome: "NIX CLINICA DO SONO",
    endereco: "QD 716 COJ L BL 1 SALA 415, CENTRO CLINICO SUL",
    telefones: "3297-1660",
    especialidades: "POLISSONOGRAFIA"
  },
  {
    nome: "UROMEDICAL - CENTRO AVANÇADO DE UROLOGIA E ANDROLOGIA",
    endereco: "SHLS 716, ED. MEDICAL CENTER SL 202.",
    telefones: "3345-0805, 3345-0838",
    especialidades: "Urologia"
  },
  {
    nome: "UROS – UROLOGIA E ANDROLOGIA",
    endereco: "ED. BIOSPHERE HEATH CENTER SETOR HOSP. NORTE-- 716 NORTE, CONJ I BL A SALAS 301-307",
    telefones: "3349-0065, 3349-0073",
    whatsapp: "981987725"
  },
  {
    nome: "CEOL – CENTRO ESPEC. DE OTORRINO.",
    endereco: "715/915 ED. PACINI, BL D SALA 219. Emergência Hosp Santa Lúcia BL C SL 5",
    telefones: "3346-4312, 99297-6762"
  },
  {
    nome: "OTORRINO BRASILIA",
    endereco: "613/614 L2 SUL, EDFICIO VITRIUM SALA 223",
    telefones: "3245-3444, 986112699"
  },
  {
    nome: "OFTALMOCENTER",
    endereco: "SEPS 710/910 – CENTRO CLÍNICO VIA BRASIL, LOJA 45 – GALERIA.",
    telefones: "3242-7979, 99977-3495"
  },
  {
    nome: "INSTITUTO DE OLHOS DE TAGUATINGA",
    endereco: "QNA 17, CASA 03",
    telefones: "3351-4742"
  },
  {
    nome: "HOSP DE OLHOS SANTA LÚCIA.",
    endereco: "CNM 01, BL. K, SALA 108, CEILÂNDIA CENTRO.",
    telefones: "3373-2020, 3371-2020"
  },
  {
    nome: "INBOL – VISÃO INSTITUTO",
    endereco: "SEPS 714/914, CJ. E, SL. 327/330, Ed. TALENTO. Asa Sul.",
    telefones: ""
  },
  {
    nome: "ISOB – VISÃO INSTITUTO",
    endereco: "CNC 01, LOTE 14, TAGUATINGA.",
    telefones: "3038-8001",
    obs: "Samambaia, Guará Gama, Taguatinga, Ceilândia e Águas Claras."
  },
  {
    nome: "FISIOCEI REAB. FÍSICA",
    endereco: "QNM 17, CONJ. H, LT 58 CEILÂNDIA",
    telefones: "3372-9361",
    especialidades: "Fisioterapia"
  },
  {
    nome: "EQUILIBRIO FISIOTERAPIA",
    endereco: "QND 30, LT 42, LJ 01 TAGUATINGA.",
    telefones: "39638935"
  },
  {
    nome: "PROFISIO - FISIOTERAPIA",
    endereco: "SLCRN 710, BL D LOJA 11, ASA NORTE.",
    telefones: "3034-8054, 98531-4674"
  },
  {
    nome: "FISIOTERAPIA GUARA",
    endereco: "QI 18 CONJ V CASA 26 - GUARA I",
    telefones: "99916-2124, 99370-0737"
  },
  {
    nome: "CLINICA SANTA CLARA",
    endereco: "QSE AREA ESPECIAL 16 LT 01, TAGUATINGA SUL",
    telefones: "3044-6773, 3356-6777",
    whatsapp: "98329-8803",
    obs: "Em frente Hosp. Santa Marta"
  },
  {
    nome: "CLINICA BRASÍLIA",
    endereco: "QNM 17 CONJ. H CASA 14, CEILANDIA SUL",
    telefones: "3373-4867, 3373-3131"
  },
  {
    nome: "PERFIL - DIAGNÓSTICO ULTRASONOGRAFIA",
    endereco: "CENTRO CLINICO ADVANCE 1, SGAS 915 LOTE 70 SALAS S1 153/154 ASA SUL.",
    telefones: "99985-7866, 3346-2266"
  },
  {
    nome: "VILA RICA - CLÍNICA DE RADIOLOGIA",
    endereco: "SHLS 716, LT. 05, CENTRO CLINICO SUL TORRE II, SALA W423.",
    telefones: "3242-4080, 3442-6300",
    whatsapp: "98612-9832",
    obs: "Exames Radiológicos e Outros."
  },
  {
    nome: "CDS / VIVER",
    endereco: "ASA SUL-SHLS 716 SUL ED. CENTRO CLINICO SUL TORRE l SALA 320 A 340",
    telefones: "3034-8432, 3034-8213",
    obs: "PONTO DE REFERENCIA LBV E HOSPITAL DO CORAÇÃO."
  },
  {
    nome: "PERFECTA",
    endereco: "SHLS 716- TORRE II – TERREO CENTRO CLINICO SUL. SGAS 611 BLOCO 1 SALA S3 SUBSOLO CENTRO MED. LUCIO COSTA.",
    telefones: "3245-5872, 3346-2373"
  },
  {
    nome: "INFINITA",
    endereco: "QUADRA 08 COMERCIO LOCAL 15 SALAS 02-03 SOBRADINHO-DF RUA 12 LOTE 05 (POLO DE MODAS) GUARA II",
    telefones: "4007-2130, 3043-2250"
  },
  {
    nome: "ALMEIDA & MARRA",
    telefones: "3471-6608",
    especialidades: "ORTOPEDIA",
    obs: "Dentro do Pronto Socorro das Fraturas"
  },
  {
    nome: "PRONTO SOCORRO DAS FRATURAS",
    endereco: "QNM 17, CONJ. H, LOTE 16/17 CEILÂNDIA.",
    telefones: "3371-0606, 3471-8181"
  },
  {
    nome: "FISIOTERAPIA RIBEIROS",
    endereco: "DENTRO DO PRONTO SOCORRO DAS FRATURAS",
    telefones: "3551-0031"
  },
  {
    nome: "SÃO CAMILO SAMAMBAIA",
    endereco: "QN 414 COJ C LOTE 01 LOJA 01 a 08 SAMAMBAIA NORTE",
    telefones: "99653-5045, 3357-50403"
  },
  {
    nome: "LABORATORIO MICRA",
    endereco: "ST SHCSCR QUADRA 515 BLOCO B LOJA 77 ASA SUL",
    telefones: "3245-1275, 99268-4928"
  },
  {
    nome: "LABORATÓRIO CITOPREV",
    telefones: "3328-4624, 3327-6093"
  },
  {
    nome: "LABORATÓRIO DIAGNÓSTICO",
    endereco: "SGAS 613, CONJ. C 1º SUBSOLO L2 SUL.",
    telefones: "3878-2688, 3043-6100"
  },
  {
    nome: "LABORATORIO ANALISIS",
    endereco: "17 CONJ H LT 16/17 PARTE A (DENTRO DA BENECAP)",
    telefones: "3471-8160, 3041-7384"
  },
  {
    nome: "LABORATÓRIO SABIN",
    telefones: "3329-8000"
  },
  {
    nome: "SABIN RADIOLOGIA",
    endereco: "ST SCS Q 01 BL D TORRE A LOJAS 23 A 36 TERREO, ASA NORTE",
    telefones: "3329-8000"
  }
];

}
