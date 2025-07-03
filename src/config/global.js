export default {
  global: {
    Name: 'Gestión de documentación aduanera',
    Description:
      'Este componente desarrolla conocimientos fundamentales sobre la gestión documental aduanera, cubriendo temas como la identificación y elaboración de las fichas técnicas de las mercancías, la gestión de la información necesaria y los sistemas de información aduanera. Proporciona las bases para comprender el manejo eficiente de la documentación en operaciones de comercio exterior.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fichas técnicas de mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Importancia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Metodologías de recopilación de información',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de diligenciamiento de registros',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Herramientas tecnológicas de diligenciamiento de registros',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Principios de manejo confidencial de información',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de información aduanero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Aplicaciones y funcionalidades',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Técnicas de uso',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Aseguramiento de la información',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/gestion-de-documentacion-aduanera.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fichas técnicas',
      referencia:
        'Camex. (2023). Documentación de Comercio Exterior - Sesión 8 - Ficha Técnica. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dzEgdWvdK4E',
    },
    {
      tema: 'Principios de manejo confidencial de información',
      referencia:
        'Legintech. (2022). Principios para el tratamiento de datos personales. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4KaLVfgjIl4',
    },
    {
      tema: 'Sistemas de información aduanero',
      referencia:
        'DIAN. (2023). Proceso de carga en operaciones aduaneras de importación. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uzGT9UuT9so',
    },
    {
      tema: 'VUCE',
      referencia: 'VUCE Colombia. (2017). VUCE. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8cQZ9rv1VAk',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'es una colección organizada de información digital, generalmente almacenada en un sistema informático, y diseñada para facilitar el acceso, la gestión y la actualización de los datos.',
    },
    {
      termino: 'Clasificación arancelaria',
      significado:
        'consiste en la asignación de un código numérico a las mercancías que se denomina subpartida arancelaria, teniendo como presupuesto fundamental el conocimiento de sus características físicas, químicas y técnicas, entre otras, en el marco de la Nomenclatura Arancelaria vigente.',
    },
    {
      termino: 'DIAN',
      significado:
        'la Dirección de Impuestos y Aduanas Nacionales (DIAN) es una entidad gubernamental que se encarga de gestionar los impuestos y el comercio exterior en Colombia.',
    },
    {
      termino: 'DUA',
      significado:
        'el Documento Único Administrativo (DUA) es un formulario obligatorio que se utiliza para realizar operaciones de importación y exportación de mercancías.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'es un documento detallado que describe las características físicas, técnicas, químicas y/o comerciales de un producto, necesario para su correcta clasificación arancelaria, valoración aduanera y verificación del cumplimiento de requisitos legales en operaciones de importación y exportación.',
    },
    {
      termino: 'Interoperabilidad',
      significado:
        'es la capacidad de que diferentes sistemas puedan intercambiar información y funcionar de manera conjunta. Se basa en estándares, protocolos y tecnologías que permiten que los datos fluyan entre sistemas con poca intervención humana.',
    },
    {
      termino: 'Minería de datos',
      significado:
        'es una técnica asistida por computadora que se utiliza en los análisis para procesar y explorar grandes conjuntos de datos.',
    },
    {
      termino: 'SIA',
      significado:
        'un Sistema de Información Aduanero (SIA) es una plataforma tecnológica que facilita la gestión y automatización de procesos clave en el comercio exterior.',
    },
    {
      termino: 'SIIS',
      significado:
        'el Sistema de Inspección Simultánea (SIIS) es un módulo informático que permite agendar inspecciones de mercancías en los terminales portuarios y aeroportuarios de Colombia.',
    },
    {
      termino: 'SYGA',
      significado:
        'el Sistema de Información y Gestión Aduanera (SYGA) es una herramienta tecnológica desarrollada por la Dirección de Impuestos y Aduanas Nacionales (DIAN) de Colombia con el propósito de modernizar y mejorar la eficiencia en los procesos de control aduanero.',
    },
    {
      termino: 'VUCE',
      significado:
        'la Ventanilla Única de Comercio Exterior –VUCE– es la principal herramienta de facilitación del comercio del País, a través de la cual se canalizan trámites de comercio exterior.',
    },
    {
      termino: '<em>Webscraping</em>',
      significado:
        'es una técnica que permite extraer datos de sitios web de manera automática.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alexia Calderón. (2025). ¿Qué es una ficha técnica en comercio internacional?',
      link:
        'https://internacionalmente.com/ficha-tecnica-comercio-internacional/',
    },
    {
      referencia:
        'Appolo. (2023). ¿Cómo el sistema informático aduanero colombiano optimiza la eficiencia en la gestión aduanera?',
      link:
        'https://appolo.com.co/como-funciona-sistema-informatico-aduanero-colombia/',
    },
    {
      referencia:
        'DG Tecnologia Acessível. (2022). ¿Qué es la Gestión de la Información?',
      link: 'https://dgcloud.com.br/es/que-es-la-gestion-de-la-informacion/',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (2017). Regulación Aduanera en Colombia.',
      link:
        'https://www.dian.gov.co/aduanas/Documents/Nueva%20Regulaci%C3%B3n%20Aduanera%20en%20Colombia.pdf',
    },
    {
      referencia:
        'Innevo. (2023). Cómo Cuidar la Confidencialidad de la Información en tu Empresa.',
      link: 'https://innevo.com/blog/confidencialidad-de-la-informacion',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2021). Zajuna Semilla. 134600_1_Virtual-Operaciones de Comercio Exterior.',
      link: 'https://zajuna.sena.edu.co/zajuna/course/view.php?id=32448',
    },
    {
      referencia:
        'Universitat Politecnica de Valencia. (2022). Introducción a la gestión de la información y del conocimiento en la empresa.',
      link:
        'https://riunet.upv.es/bitstreams/e0125038-9086-42d8-954e-4401b3f5637e/download',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yezid Arturo Choperena Guerrero',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina Gonzalez Garcia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
