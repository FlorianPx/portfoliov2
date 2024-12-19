const diplomasData = [
  {
    id: 1,
    title: 'Licence Informatique',
    school_establishment: 'Université XYZ',
    date_obtained: '2020-06-16',
    description: 'Formation généraliste en informatique.',
  },
  {
    id: 2,
    title: 'Master Développement Web',
    school_establishment: 'Université ABC',
    date_obtained: '2022-06-15',
    description: 'Spécialisation en développement web.',
  },
];

const projectsData = [
  {
    id: 1,
    type: null,
    name: 'Site de Portfolio',
    image: null,
    alt: null,
    description: 'Création d’un portfolio professionnel.',
    url: 'https://monportfolio.com',
    tools: null,
    stacks: null,
    date_debut: '2023-01-01',
    date_fin: '2023-03-01',
  },
];

const sideProjectsData = [
  {
    id: 1,
    type: null,
    name: 'Site de Portfolio',
    image: null,
    alt: null,
    description: 'Création d’un portfolio professionnel.',
    url: 'https://monportfolio.com',
    tools: null,
    stacks: null,
    date_debut: '2023-01-01',
    date_fin: '2023-03-01',
  },
];

const stacksData = [
  {
    id: 1,
    name: 'React',
    type: 'frontend',
    language: 'JavaScript',
    description: 'Bibliothèque pour créer des interfaces utilisateur',
    current_version: '18.2.0',
    license: 'MIT',
    repository_url: 'https://github.com/facebook/react',
    official_website: 'https://reactjs.org',
    created_at: '2013-05-29',
    maintained_by: 'Meta (Facebook)',
    status: 'active',
    popularity_score: 9.8,
    tags: ['SPA', 'SSR'],
    dependencies: ['Webpack', 'Babel'],
    ecosystem: ['Redux', 'React Router'],
    logo_url: 'https://reactjs.org/logo-og.png',
    is_mastered: false,
  },
  {
    id: 2,
    name: 'Angular',
    type: 'frontend',
    language: 'TypeScript',
    description: 'Framework puissant pour applications web',
    current_version: '16.0.0',
    license: 'MIT',
    repository_url: 'https://github.com/angular/angular',
    official_website: 'https://angular.io',
    created_at: '2016-09-14',
    maintained_by: 'Google',
    status: 'active',
    popularity_score: 9.5,
    tags: ['SPA', 'Reactive'],
    dependencies: ['RxJS', 'Webpack'],
    ecosystem: ['NgRx'],
    logo_url: 'https://angular.io/assets/images/logos/angular/angular.svg',
    is_mastered: false,
  },
  {
    id: 3,
    name: 'Vue.js',
    type: 'frontend',
    language: 'JavaScript',
    description: 'Framework progressif pour les interfaces utilisateur',
    current_version: '3.3.4',
    license: 'MIT',
    repository_url: 'https://github.com/vuejs/vue',
    official_website: 'https://vuejs.org',
    created_at: '2014-02-01',
    maintained_by: 'Evan You',
    status: 'active',
    popularity_score: 9.5,
    tags: ['MVVM', 'Reactive'],
    dependencies: ['Webpack', 'Vite'],
    ecosystem: ['Pinia', 'Vue Router'],
    logo_url: 'https://vuejs.org/images/logo.png',
    is_mastered: false,
  },
  {
    id: 4,
    name: 'Svelte',
    type: 'frontend',
    language: 'JavaScript',
    description: 'Framework compilant du code hautement optimisé',
    current_version: '4.0.0',
    license: 'MIT',
    repository_url: 'https://github.com/sveltejs/svelte',
    official_website: 'https://svelte.dev',
    created_at: '2016-11-26',
    maintained_by: 'Rich Harris',
    status: 'active',
    popularity_score: 9,
    tags: ['Reactive', 'Compiled'],
    dependencies: ['Vite', 'Rollup'],
    ecosystem: [],
    logo_url: 'https://svelte.dev/svelte-logo.svg',
    is_mastered: false,
  },
  {
    id: 5,
    name: 'Ember.js',
    type: 'frontend',
    language: 'JavaScript',
    description: 'Framework robuste pour applications web ambitieuses',
    current_version: '4.12.0',
    license: 'MIT',
    repository_url: 'https://github.com/emberjs/ember.js',
    official_website: 'https://emberjs.com',
    created_at: '2011-12-08',
    maintained_by: 'Ember.js Core Team',
    status: 'active',
    popularity_score: 8.5,
    tags: ['MVC', 'Convention over Configuration'],
    dependencies: ['Handlebars'],
    ecosystem: [],
    logo_url: 'https://emberjs.com/images/brand/ember-tomster-lockup-dark.svg',
    is_mastered: false,
  },
  {
    id: 6,
    name: 'Lit',
    type: 'frontend',
    language: 'JavaScript',
    description: 'Library légère pour des composants web rapides',
    current_version: '2.4.0',
    license: 'BSD',
    repository_url: 'https://github.com/lit/lit',
    official_website: 'https://lit.dev',
    created_at: '2019-11-01',
    maintained_by: 'Google',
    status: 'active',
    popularity_score: 8.8,
    tags: ['Web Components', 'Reactive'],
    dependencies: [],
    ecosystem: [],
    logo_url: 'https://lit.dev/images/logo.svg',
    is_mastered: false,
  },
  {
    id: 7,
    name: 'Backbone.js',
    type: 'frontend',
    language: 'JavaScript',
    description: 'Framework léger basé sur MVC',
    current_version: '1.4.1',
    license: 'MIT',
    repository_url: 'https://github.com/jashkenas/backbone',
    official_website: 'https://backbonejs.org',
    created_at: '2010-10-13',
    maintained_by: 'Jeremy Ashkenas',
    status: 'deprecated',
    popularity_score: 6.5,
    tags: ['MVC', 'Lightweight'],
    dependencies: ['Underscore.js'],
    ecosystem: [],
    logo_url: 'https://backbonejs.org/docs/images/backbone.png',
    is_mastered: false,
  },
  {
    id: 8,
    name: 'Node.js',
    type: 'backend',
    language: 'JavaScript',
    description: "Environnement d'exécution pour JavaScript côté serveur",
    current_version: '20.0.0',
    license: 'MIT',
    repository_url: 'https://github.com/nodejs/node',
    official_website: 'https://nodejs.org',
    created_at: '2009-05-27',
    maintained_by: 'OpenJS Foundation',
    status: 'active',
    popularity_score: 9.7,
    tags: ['Event-driven', 'Non-blocking'],
    dependencies: ['NPM'],
    ecosystem: ['Express.js', 'Koa'],
    logo_url: 'https://nodejs.org/static/images/logo.svg',
    is_mastered: false,
  },
  {
    id: 9,
    name: 'Django',
    type: 'backend',
    language: 'Python',
    description: 'Framework web pour un développement rapide',
    current_version: '4.2.5',
    license: 'BSD',
    repository_url: 'https://github.com/django/django',
    official_website: 'https://www.djangoproject.com',
    created_at: '2005-07-21',
    maintained_by: 'Django Software Foundation',
    status: 'active',
    popularity_score: 9.2,
    tags: ['MVC', 'ORM', 'REST'],
    dependencies: ['PostgreSQL', 'SQLite'],
    ecosystem: ['Django REST Framework'],
    logo_url:
      'https://static.djangoproject.com/img/logos/django-logo-negative.svg',
    is_mastered: false,
  },
  {
    id: 10,
    name: 'Flask',
    type: 'backend',
    language: 'Python',
    description: 'Framework léger et minimaliste',
    current_version: '2.3.4',
    license: 'BSD',
    repository_url: 'https://github.com/pallets/flask',
    official_website: 'https://flask.palletsprojects.com',
    created_at: '2010-04-01',
    maintained_by: 'Pallets',
    status: 'active',
    popularity_score: 8.5,
    tags: ['WSGI', 'Microframework'],
    dependencies: ['Jinja2'],
    ecosystem: ['Flask-SQLAlchemy'],
    logo_url:
      'https://flask.palletsprojects.com/en/2.3.x/_images/flask-logo.png',
    is_mastered: false,
  },
];

const toolsData = [
  {
    id: 1,
    name: 'Git',
    type: 'version-control',
    language: 'C',
    description: 'Système de contrôle de version distribué',
    current_version: '2.42.0',
    license: 'GPL-2.0',
    repository_url: 'https://github.com/git/git',
    official_website: 'https://git-scm.com',
    created_at: '2005-04-07',
    maintained_by: 'Linus Torvalds',
    status: 'active',
    popularity_score: 9.9,
    tags: ['Version Control', 'Collaboration', 'Open Source'],
    dependencies: ['N/A'],
    ecosystem: ['GitHub', 'GitLab', 'Bitbucket'],
    logo_url: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
  },
  {
    id: 2,
    name: 'GitHub',
    type: 'platform',
    language: 'Various',
    description: "Plateforme d'hébergement de code basé sur Git",
    current_version: null,
    license: 'Commercial',
    repository_url: 'https://github.com',
    official_website: 'https://github.com',
    created_at: '2008-04-10',
    maintained_by: 'Microsoft',
    status: 'active',
    popularity_score: 9.8,
    tags: ['Version Control', 'Collaboration', 'Open Source'],
    dependencies: ['Git'],
    ecosystem: ['N/A'],
    logo_url:
      'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  {
    id: 3,
    name: 'GitLab',
    type: 'platform',
    language: 'Ruby',
    description:
      'Plateforme DevOps pour héberger, collaborer et livrer du code',
    current_version: '16.5',
    license: 'MIT',
    repository_url: 'https://gitlab.com/gitlab-org/gitlab',
    official_website: 'https://about.gitlab.com',
    created_at: '2011-10-01',
    maintained_by: 'GitLab Inc.',
    status: 'active',
    popularity_score: 9.4,
    tags: ['Version Control', 'DevOps', 'CI/CD'],
    dependencies: ['N/A'],
    ecosystem: ['N/A'],
    logo_url:
      'https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-stacked-rgb.png',
  },
  {
    id: 4,
    name: 'Docker',
    type: 'containerization',
    language: 'Go',
    description:
      "Plateforme pour la gestion de conteneurs et le déploiement d'applications",
    current_version: '24.0.2',
    license: 'Apache-2.0',
    repository_url: 'https://github.com/docker/docker-ce',
    official_website: 'https://www.docker.com',
    created_at: '2013-03-20',
    maintained_by: 'Docker, Inc.',
    status: 'active',
    popularity_score: 9.7,
    tags: ['Containerization', 'DevOps', 'Virtualization'],
    dependencies: ['Kubernetes'],
    ecosystem: ['N/A'],
    logo_url:
      'https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png',
  },
  {
    id: 5,
    name: 'npm',
    type: 'package-manager',
    language: 'JavaScript',
    description: 'Gestionnaire de paquets officiel de Node.js',
    current_version: '9.9.0',
    license: 'MIT',
    repository_url: 'https://github.com/npm/cli',
    official_website: 'https://www.npmjs.com',
    created_at: '2010-01-12',
    maintained_by: 'npm Inc.',
    status: 'active',
    popularity_score: 9.7,
    tags: ['Package Management', 'Node.js', 'JavaScript'],
    dependencies: ['N/A'],
    ecosystem: ['N/A'],
    logo_url:
      'https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg',
  },
  {
    id: 6,
    name: 'Yarn',
    type: 'package-manager',
    language: 'JavaScript',
    description: 'Gestionnaire de paquets rapide et sécurisé pour JavaScript',
    current_version: '3.6.4',
    license: 'MIT',
    repository_url: 'https://github.com/yarnpkg/berry',
    official_website: 'https://yarnpkg.com',
    created_at: '2016-10-11',
    maintained_by: 'Yarn Contributors',
    status: 'active',
    popularity_score: 9.5,
    tags: ['Package Management', 'Node.js', 'Monorepo'],
    dependencies: ['N/A'],
    ecosystem: ['N/A'],
    logo_url:
      'https://raw.githubusercontent.com/yarnpkg/website/master/static/icon.svg',
  },
  {
    id: 7,
    name: 'VS Code',
    type: 'editor',
    language: 'TypeScript',
    description: 'Éditeur de code léger et extensible',
    current_version: '1.85.0',
    license: 'MIT',
    repository_url: 'https://github.com/microsoft/vscode',
    official_website: 'https://code.visualstudio.com',
    created_at: '2015-04-29',
    maintained_by: 'Microsoft',
    status: 'active',
    popularity_score: 9.8,
    tags: ['Editor', 'Extensions', 'Debugging'],
    dependencies: ['N/A'],
    ecosystem: ['N/A'],
    logo_url: 'https://code.visualstudio.com/assets/images/code-stable.png',
  },
  {
    id: 8,
    name: 'MySQL',
    type: 'database',
    language: 'C/C++',
    description: 'Système de gestion de bases de données relationnelles',
    current_version: '8.0.34',
    license: 'GPL-2.0',
    repository_url: 'https://github.com/mysql/mysql-server',
    official_website: 'https://www.mysql.com',
    created_at: '1995-05-23',
    maintained_by: 'Oracle Corporation',
    status: 'active',
    popularity_score: 9.7,
    tags: ['Database', 'SQL', 'Open Source'],
    dependencies: ['Workbench'],
    ecosystem: ['N/A'],
    logo_url: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
  },
  {
    id: 9,
    name: 'Storybook',
    type: 'ui-tooling',
    language: 'JavaScript',
    description:
      "Outil pour le développement d'interfaces utilisateur en isolation",
    current_version: '7.1.0',
    license: 'MIT',
    repository_url: 'https://github.com/storybookjs/storybook',
    official_website: 'https://storybook.js.org',
    created_at: '2016-09-26',
    maintained_by: 'Storybook Team',
    status: 'active',
    popularity_score: 9.2,
    tags: ['UI Development', 'React', 'Vue.js'],
    dependencies: ['Webpack', 'Babel'],
    ecosystem: ['N/A'],
    logo_url: 'https://storybook.js.org/images/logos/icon-storybook.svg',
  },
  {
    id: 10,
    name: 'Workbench',
    type: 'database-tool',
    language: 'C/C++',
    description: 'Outil visuel pour gérer les bases de données MySQL',
    current_version: '8.0.34',
    license: 'GPL-2.0',
    repository_url: 'https://github.com/mysql/mysql-workbench',
    official_website: 'https://dev.mysql.com/doc/workbench/en/',
    created_at: '2005-01-01',
    maintained_by: 'Oracle Corporation',
    status: 'active',
    popularity_score: 9,
    tags: ['Database Management', 'SQL', 'MySQL'],
    dependencies: ['N/A'],
    ecosystem: ['N/A'],
    logo_url: 'https://dev.mysql.com/common/logos/mysql-logo.svg',
  },
];

export const data = {
  diplomas: diplomasData,
  projects: projectsData,
  sideProjects: sideProjectsData,
  stacks: stacksData,
  tools: toolsData,
};
