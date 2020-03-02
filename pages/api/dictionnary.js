export default (req, res) => {
  const { lang } = req.body;

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

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
        passion_building_soft: "Je conçoit des outils permettant de sauver du temps en expérimentant avec les plus récents cadriciels et librairies."
      },
      projects: {
        projects: "Projets",
        project: "Projet",
        soon: "Bientôt..."
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
        passion_building_soft: "Developing time-saving tools and interfaces while experimenting with new frameworks and librairies is my hobby."
      },
      projects: {
        projects: "Projects",
        project: "Project",
        soon: "Soon..."
      },
      footer: {
        rights_reserved: "All Rights Reserved."
      }
    }
  };
  res.end(JSON.stringify(dict[lang]));

};
