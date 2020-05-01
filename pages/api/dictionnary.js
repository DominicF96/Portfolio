export default (req, res) => {
  const { lang } = req.body;

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const dict = {
    fr: {
      catchphrase: {
        hello: "Salut!",
        i_am_a_soft_dev: "Je suis développeur logiciel",
        building: "Je conçoit",
        the_web: "des applications web",
        games: "des jeux",
        engineering_stack: "une suite logicielle pour développeurs",
        courses: "des cours",
        skills: "le tout en améliorant mes capacités"
      },
      knowledge: {
        atlassian_suite: "Suite Atlassian",
        programming_query_languages: "Langages de programmation & de requêtes",
        frameworks: "Cadriciels",
        softwares: "Logiciels",
        others: "Autres"
      },
      nav: {
        pdf: "TODO: Handle PDF path"
      },
      quotes: {
        student_work_experience: "Étudiant de troisième année en ingénierie logicielle avec près de 2 ans d'expérience en tant que développeur Full Stack.",
        passion_building_soft: "Je conçoit des outils permettant de sauver du temps en expérimentant avec les plus récents cadriciels et librairies.",
        creativity_is_a_must: "J'ai besoin que mon travail laisse place à la créativité et à l'innovation."
      },
      projects: {
        projects: "Projets",
        list: [
          {
            name: "Télécommande universelle adaptée",
            image: "/images/Remote_IR.png",
            description: "Un module de télécommande infrarouge universel pouvant être connecté à un appareil Android par USB. Le module a été conçu pour être utilisé par des personnes ayant de sévères problèmes moteurs. Jumelé avec son application Android, le module peut d'enregistrer et rejouer tout signal infrarouge permettant de contrôler pratiquement tout système infrarouge.",
            github: "https://github.com/DominicF96/Ergotera-App"
          },
          {
            name: "Modélisation 3D",
            image: "/images/Renders.png",
            description: "Amateur de modélisation 3D et de Blender depuis plus de 5 ans. Modélisant principalement des modèles pour des projets personnels. J'ai appris à modéliser, texturer, définir l'ossature et animer. J'étudie actuellement les shaders.",
          }
        ]
      },
      footer: {
        rights_reserved: "Tous droits réservés."
      }
    },
    en: {
      catchphrase: {
        hello: "Hello!",
        i_am_a_soft_dev: "I'm a Software Developer",
        building: "Building",
        the_web: "the web",
        games: "games",
        engineering_stack: "an engineering stack",
        courses: "courses",
        skills: "skills"
      },
      knowledge: {
        atlassian_suite: "Atlassian Suite",
        programming_query_languages: "Programming & Query Languages",
        frameworks: "Frameworks",
        softwares: "Softwares",
        others: "Others"
      },
      nav: {
        pdf: "TODO: Handle PDF path"
      },
      quotes: {
        student_work_experience: "Third year software engineering student with almost 2 years of professional experience as a Full Stack Developer.",
        passion_building_soft: "Developing time-saving tools and interfaces while experimenting with new frameworks and librairies is my hobby.",
        creativity_is_a_must: "Creativity and innovation are a must in a workplace."
      },
      projects: {
        projects: "Projects",
        list: [
          {
            name: "Adapted Smart Universal IR Remote",
            image: "/images/Remote_IR.png",
            description: "An adapted infrared remote module that can be connected to an Android device via USB. The remote was designed to be usable by people with severe motor skills problems. Paired with a native Android application, the module could be used to program and replay any signal to control virtually any infrared device.",
            github: "https://github.com/DominicF96/Ergotera-App"
          },
          {
            name: "3D Modeling",
            image: "/images/Renders.png",
            description: "3D Modeling hobbyist and Blender enthusiast for over 5 years. Building game assets for personnal projects. Modeling, texturing, rigging and animating. Currently learning about shaders.",
          }
        ]
      },
      footer: {
        rights_reserved: "All Rights Reserved."
      }
    }
  };
  res.end(JSON.stringify(dict[lang]));

};
