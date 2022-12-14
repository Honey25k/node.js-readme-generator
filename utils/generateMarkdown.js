// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license !== 'none') {
  return `![License: MIT](https://img.shields.io/badge/License-${license}MIT-yellow.svg)`
} else if (license === 'MIT') {
  return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
} else {
  return ``; 
}

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {

  if (data.license === 'MIT') {

    return `
    ### MIT License 

    > Copyright (c) [2022] [${data.user}]
    > 
    > __Permission is hereby granted, free of charge, to any person obtaining a copy__
    > __of this software and associated documentation files (the "Software"), to deal__
    > __in the Software without restriction, including without limitation the rights__
    > __to use, copy, modify, merge, publish, distribute, sublicense, and/or sell__
    > __copies of the Software, and to permit persons to whom the Software is__
    > __furnished to do so, subject to the following conditions:__
    > 
    > The above copyright notice and this permission notice shall be included in all
    > copies or substantial portions of the Software.
    > 
    > THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    > IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    > FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    > AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    > LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    > OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    > SOFTWARE.
    `;
  } else {
  return ``; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {

  if (data.license !== 'none') {

    return `
    ## License
    ${renderLicenseLink(data)}

    `
  } else {
    return `
    ## License

    There is no license for this project.

    `

  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)} 
  
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ***

  ## Installation

  ${data.installation}
 
  ## Usage

  ${data.usage}

  ${renderLicenseSection(data)}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}
  
  ## Questions

  If you have any questions about the project you can reach out to me via email or GitHub with the information below. 

  >Email: ${data.email} 

  >GitHub : [${data.user}](https://github.com/${data.user})

`;


} 

module.exports = { generateMarkdown }; 