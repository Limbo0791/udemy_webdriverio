Proper set up of WebDriverIO, EsLint and configs.

    npm init (creates package.json)
    npm install --save-dev @wdio/cli (installs webdriverIO)

    .\node_modules\.bin\wdio config (opens configuration)
    	local
    	local machine
    	No for appium
    	Mocha framework
    	No compiler
    	Yes for autogenerate test files
    	Default suggestion for tests location is fine.
    	Page objects: yes
    	Base url: localhost
    	Reporter: spec
    	Chromedriver
    	NPM install yes


Adding ESLint and Prettier
npm install eslint --save-dev (installs eslint)
.\node_modules\.bin\eslint --init (opens eslint config wizard)
Check syntax and find problems
JS modules
None of these
No typescript
Unselect browser, select node
Config format: JSON
Installing prettier:
npm install prettier --save-dev
Installing ESLint WDIO plugin:
npm install eslint-plugin-wdio
Open the ESLint config file, adjust so it looks like this:
{
"plugins": ["wdio"],
"env": {
"es2021": true,
"node": true,
"mocha": true
},
"extends": ["eslint:recommended", "plugin:wdio/recommended"],
"overrides": [],
"parserOptions": {
"ecmaVersion": "latest",
"sourceType": "module"
},
"rules": {}
}

Configuring the wdio.conf.js file:
In specs, specify the path to your test files: ['./test/specs/**/*.js'] or coould also be './test/\*.js'
In base url: change the base URL to the website you are testing.
Make test runner user friendly:
Open package.json.
Under "test" in Scripts add: "test": ".\\node_modules\\.bin\\wdio",
Use double slashes.

Now, to run a test:
npm test wdio.conf.js
