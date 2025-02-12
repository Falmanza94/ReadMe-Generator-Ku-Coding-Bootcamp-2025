// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === 'GNU GPL v2') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  else if (license === 'BSD 3-Clause') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else if (license === 'WTFPL') {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  }
  else if (license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'Apache 2.0') {
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === 'GNU GPL v2') {
    return `[GNU GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license === 'BSD 3-Clause') {
    return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else if (license === 'WTFPL') {
    return `[WTFPL License](http://www.wtfpl.net/about/)`;
  }
  else if (license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
      return '';
  } else {
      return `
### Licensing 
${renderLicenseLink(license)}
${renderLicenseBadge(license)}
`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## License
${renderLicenseSection(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have questions, reach out to me at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.github}](https://github.com/${data.github}).

## Link to Video:
[![Ku-Coding-Bootcamp-Activity7-ReadMe-Generator]](https://watch.screencastify.com/v/aTZ5mbj78AbsE0J3wynG)
`;
}

export default generateMarkdown;
