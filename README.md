doc.pidconsortium.eu
====================

### Prerequisites
Install **Docusaurus** v2 on the machine you want to edit the documentation. For more information please visit [Installation Process] (https://v2.docusaurus.io/docs/installation)

### Structure

The documentation has the following files and directories:
```bash
.
├── website
│   ├── docs
│   │   ├── examples
│   │   │   ├── authcurl.md
│   │   │   ├── authphp.md
│   │   │   ├── authpython.md
│   │   │   ├── authres.md
│   │   │   ├── createcurl.md
│   │   │   ├── createperl.md
│   │   │   ├── createphp.md
│   │   │   ├── createpython.md
│   │   │   ├── createres.md
│   │   │   ├── deletecurl.md
│   │   │   ├── deleteperl.md
│   │   │   ├── deletephp.md
│   │   │   ├── deletepython.md
│   │   │   ├── deleteres.md
│   │   │   ├── generatecurl.md
│   │   │   ├── generateperl.md
│   │   │   ├── generatephp.md
│   │   │   ├── generatepython.md
│   │   │   ├── generateres.md
│   │   │   ├── getcurl.md
│   │   │   ├── getperl.md
│   │   │   ├── getphp.md
│   │   │   ├── getpython.md
│   │   │   ├── getres.md
│   │   │   ├── listcurl.md
│   │   │   ├── listperl.md
│   │   │   ├── listphp.md
│   │   │   ├── listpython.md
│   │   │   ├── listres.md
│   │   │   ├── searchcurl.md
│   │   │   ├── searchperl.md
│   │   │   ├── searchphp.md
│   │   │   ├── searchpython.md
│   │   │   └── searchres.md
│   │   ├── api-auth.md
│   │   ├── api-calls.md
│   │   ├── api-create.md
│   │   ├── api-delete.md
│   │   ├── api-generation.md
│   │   ├── api-get.md
│   │   ├── api-list.md
│   │   ├── api.md
│   │   ├── api-partial.md
│   │   ├── api-search.md
│   │   ├── api-update.md
│   │   ├── cross-origin.md
│   │   ├── glossary.md
│   │   ├── handle.md
│   │   ├── methods.md
│   │   ├── overview.md
│   │   ├── requests.md
│   │   ├── responses.md
│   │   ├── terms_el.md
│   │   ├── terms_en.md
│   │   └── test.md
│   ├── src
│   │   ├── css
│   │   │   └── custom.css
│   │   └── pages
│   │       ├── index.js
│   │       └── styles.module.css
│   ├── static
│   │   └── img
│   │       ├── ePIClogo.png
│   │       ├── favicon.ico
│   │       ├── grnet-favicon.png
│   │       ├── grnet-logo.png
│   │       ├── logo.svg
│   │       ├── undraw_docusaurus_mountain.svg
│   │       ├── undraw_docusaurus_react.svg
│   │       └── undraw_docusaurus_tree.svg
│   ├── babel.config.js
│   ├── docusaurus.config.js
│   ├── package.json
│   ├── README.md
│   ├── sidebars.js
│   └── yarn.lock
├── Jenkinsfile
└── README.md
```


 *  `docs/`
    Contains the Markdown files for the docs. Customize the order of the docs sidebar in `sidebars.js`. More details can be found in the [docs guide](https://v2.docusaurus.io/docs/docs-markdown-features)
 *  `src/`
    Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files in here but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing
 * * Any files within this directory will be converted into a website page. More details can be found in the [pages guide](https://v2.docusaurus.io/docs/creating-pages)
 *  `static/`
    Static directory. Any contents inside here will be copied into the root of the final `build` directory
 *  `/docusaurus.config.js` A config file containing the site configuration.
 *  `/package.json` A Docusaurus website is a React app. You can install and use any npm packages you like in them
 *  `/sidebar.js` Used by the documentation to specify the order of documents in the sidebar


These will be created after compilation
 *  **/build**
    contains the compiled site
 *  **.docusaurus/**
    contains data used for the compilation of docusaurus v2


### website/docusaurus.config.js

Contains configurations for your site and is placed in the root directory of your site.
You can find a detailed description of all parameters on the [official Docusaurus v2 page](https://v2.docusaurus.io/docs/docusaurus.config.js/).

### Commands


Compile
```bash
npm run build
```

View
```bash
npm run serve
```

* [More Information about docusaurus v2 commands](https://v2.docusaurus.io/docs/installation#build)

