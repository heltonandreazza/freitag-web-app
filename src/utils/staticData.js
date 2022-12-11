import c1 from '../assets/c1.png'
import c10 from '../assets/c10.png'
import c11 from '../assets/c11.png'
import c12 from '../assets/c12.png'
import c13 from '../assets/c13.png'
import c14 from '../assets/c14.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
import c7 from '../assets/c7.png'
import c8 from '../assets/c8.png'
import c9 from '../assets/c9.png'
import catarata from '../assets/CATARATA-min.jpeg'
import ceratocone from '../assets/CERATOCONE-min.jpeg'
import cornea from '../assets/CORNEA-min.jpeg'
import crosslinking from '../assets/CROSSLINKING-min.jpeg'
import estrabismo from '../assets/ESTRABISMO-min.jpeg'
import intraestromal from '../assets/INTRAESTROMAL-min.jpeg'
import intravitrea from '../assets/INTRAVITREA-min.jpeg'
import lacrimais from '../assets/LACRIMAIS-min.jpeg'
import oftalmologica from '../assets/OFTALMOLOGICA-min.jpeg'
import pterigio from '../assets/PTERIGIO-min.jpeg'
import refrativa from '../assets/REFRATIVA-min.jpeg'
import unidadeIndaial from '../assets/unidade_indaial2.jpeg'
import unidadeTimbo from '../assets/unidade_timbo.jpeg'
import yag from '../assets/YAG-min.jpeg'

const staticData = {
  specialties: [
    {
      name: 'Cirurgia de catarata',
      img: catarata,
      desc: `
        A cirurgia para catarata é um procedimento onde o cristalino, que está com uma mancha opaca, 
        é retirado e, logo em seguida, substituído por uma lente sintética transparente, que permite restaurar a visão.
      `,
    },
    {
      name: 'Transplante de córnea',
      img: cornea,
      desc: `
      O Transplante de Córnea é um procedimento cirúrgico que consiste na substituição do centro de uma córnea doente por outra saudável, a partir de um doador. Tem como objetivo melhorar a visão ou corrigir perfurações oculares. É uma cirurgia muito bonita, com ótimos resultados.
    `,
    },
    {
      name: 'Cirurgia de pterígio',
      img: pterigio,
      desc: `
        O pterígio é uma formação carnosa que avança sobre a córnea, geralmente do lado nasal.
        O tratamento é feito a partir do transplante de conjuntiva e uso de cola orgânica que reduz 
        significativamente as recidivas. Na cirurgia é removido o tecido fibrovascular abaixo da conjuntiva, a cabeça do pterígio e então conjuntiva saudável do mesmo olho é colocada no lugar da remoção. Assim, as recidivas reduziram-se de até 80% para 2%.
    `,
    },
    {
      name: 'Cirurgia de estrabismo',
      img: estrabismo,
      desc: `
      A cirurgia para correção de estrabismo restabelece o equilíbrio entre as forças dos músculos oculares externos, reposicionando o globo ocular. O procedimento corrige o desalinhamento e, quando possível, restaura a visão binocular.
    `,
    },
    {
      name: 'Crosslinking',
      img: crosslinking,
      desc: `
      A técnica consiste na aplicação de raios ultravioleta na superfície ocular após a instilação de um agente fotossensibilizante (normalmente a Riboflavina ou Vitamina A) durante alguns minutos. Esta técnica é capaz de reforçar as ligações químicas das fibras de colágeno da Córnea.
    `,
    },
    {
      name: 'Capsulotomia YAG Laser',
      img: yag,
      desc: `
      A capsulotomia YAG Laser é uma técnica cirúrgica que visa tratar a opacificação da cápsula posterior do cristalino com segurança, eficácia e sem dor. A capsulotomia posterior com yag laser é realizada na capsula posterior do cristalino quando esta está opacificada. Habitualmente, a opacificação da cápsula posterior ocorre como uma complicação da cirurgia de catarata.
    `,
    },
    {
      name: 'Injeção intravítrea',
      img: intravitrea,
      desc: `
      A Injeção Intravítrea ou Intraocular é uma técnica revolucionária para o tratamento de uma série de doenças da Retina, incluindo principalmente a Degeneração Macular Relacionada à Idade (DMRI), a Retinopatia Diabética e a oclusão de veias da Retina.
    `,
    },
    {
      name: 'Tratamento do ceratocone',
      img: ceratocone,
      desc: `
      Lentes de contato: inicialmente o uso de óculos ou lentes de contato pode ser suficiente para tratar a doença. Atualmente, novas lentes tem apresentado bons resultados. A híbrida é mais rígida na região central e gelatinosa na periférica. Já as lentes esclerais tem um diâmetro maior e conseguem se apoiar na esclera (parte branca do olho), proporcionando grande conforto e segurança;
Crosslinking: esta técnica endurece a parte anterior da córnea estabilizando o ceratocone. O procedimento consiste em aplicar riboflavina (B2) na córnea, esta vitamina impulsiona novas ligações entre as moléculas de colágeno quando expostas a luz ultravioleta. Somente gotas de colírio anestésico são utilizadas para que o paciente não sinta dor durante o procedimento . O crosslinking é uma opção segura e que tem apresentado resultados excelentes.
Anéis intracorneanos: são utilizados na fase intermediária da patologia, com o objetivo de melhorar a regularidade da córnea e acuidade visual. Eles consistem em segmentos de arco de acrílico especial, que serão inseridos na córnea com a utilização de laser de femtosegundo.
Transplante de córnea: esta opção é indicada em fases mais avançadas da doença. O transplante de córnea normalmente não costuma apresentar rejeição e as taxas de sucesso são superiores a 97%
    `,
    },
    {
      name: 'Cirurgia refrativa',
      img: refrativa,
      desc: `
      A cirurgia refrativa a laser é indicada para tratar de casos de Miopia, Hipermetropia, Astigmatismo e Presbiopia. É um procedimento de alta segurança, exatidão e bons resultados. Na maioria dos casos, o paciente pode ganhar independência do uso de óculos e lentes, conquistando maior comodidade e qualidade de vida.
    `,
    },
    {
      name: 'Cirurgia plastica oftamológica',
      img: oftalmologica,
      desc: `
      A cirurgia plástica ocular trabalha no cuidado e na remodelação das pálpebras e dos tecidos em volta dos olhos, como glândulas, cílios e o sistema de drenagem das lágrimas.
    `,
    },
    {
      name: 'Implante de anel intra-estromal',
      img: intraestromal,
      desc: `
      O anel corneano ou anel intraestromal é uma técnica de cirurgia para correção do Ceratocone. Apesar do nome, não é exatamente um anel. É um segmento de anel feito de um material biocompatível (PMMA) que é implantado na camada média da córnea, chamada estroma.

Indicações:

O implante está indicado para doenças da córnea em que ocorre alteração de sua curvatura, como no ceratocone e na degeneração marginal pelúcida, em casos avançados que não é possível a correção com óculos ou com adaptação de lentes de contato especiais.
    `,
    },
    {
      name: 'Cirurgia de vias lacrimais',
      img: lacrimais,
      desc: `
      A dacriocistorrinostomia é uma cirurgia frequentemente indicada para pacientes portadores de obstrução baixa da via lacrimal e basicamente consiste em produzir uma nova via de escoamento da lágrima. Essa cirurgia pode ser realizada por via externa, através de um pequeno corte na pele realizado na base do nariz ou pode ser realizada via endoscópica (por dentro do nariz); ambas demonstram um elevado índice de sucesso. Usualmente realizamos a intubação da via lacrimal com uma sonda de silicone temporária para manter o novo canal aberto durante o período de cicatrização.
    `,
    },
  ],
  places: [
    {
      id: 'slide-1',
      title: 'Hospital de Olhos Freitag - Timbó',
      description:
        'Endereço: R. Germano Brandes Sênior, 726 - Centro, Timbó - SC',
      description2: 'Ref: Ao lado do Hospital Oase',
      contact: 'Telefone: (47) 3382-0266',
      contact2: 'Whatsapp: (47) 99262-6100',
      contactUrl: 'https://wa.me/5547992626100',
      urlmap:
        'https://www.google.com/maps/place/Hospital+de+Olhos+Freitag/@-26.8265823,-49.272391,15z/data=!4m5!3m4!1s0x0:0xbc5d7dec96d3936c!8m2!3d-26.8265311!4d-49.272286',
      src: unidadeTimbo,
    },
    {
      id: 'slide-2',
      title: 'Hospital de Olhos Freitag - Indaial',
      description:
        'Endereço: Rua Marechal Deodoro da Fonseca, 1025 - Sala 04 - Tapajós, Indaial - SC',
      description2: 'Ref: Tapajós',
      contact: 'Telefone: (47) 99168-9605',
      contact2: 'Whatsapp: (47) 99168-9605',
      contactUrl: 'https://wa.me/5547991689605',
      urlmap:
        'https://www.google.com/maps/place/Rua+Marechal+Deodoro+da+Fonseca,+1025+-+Tapaj%C3%B3s,+Indaial+-+SC,+89130-000/@-26.9008823,-49.2433544,17z/data=!3m1!4b1!4m5!3m4!1s0x94df028a331fab73:0xc94877b2eea8b0c1!8m2!3d-26.9008823!4d-49.2411657',
      src: unidadeIndaial,
    },
  ],
  convenios: [
    {
      src: c1,
      alt: 'Beyer',
    },
    {
      src: c2,
      alt: 'Sc saúde',
    },
    {
      src: c3,
      alt: 'Prestomed',
    },
    {
      src: c4,
      alt: 'Unimed',
    },
    {
      src: c5,
      alt: 'boavida',
    },
    {
      src: c6,
      alt: 'postal saúde',
    },
    {
      src: c7,
      alt: 'clinipam',
    },
    {
      src: c8,
      alt: 'saúde caixa',
    },
    {
      src: c9,
      alt: 'bradesco saúde',
    },
    {
      src: c10,
      alt: 'geap saúde',
    },
    {
      src: c11,
      alt: 'cassi',
    },
    {
      src: c12,
      alt: 'renal vida',
    },
    {
      src: c13,
      alt: 'amo',
    },
    {
      src: c14,
      alt: 'ammvi',
    },
  ],
}

export default staticData
