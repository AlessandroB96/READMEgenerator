const Badge = require('../src/licenseDisplay')

const generateREADME = projectData => {
  
  return `

  <p align="center">

  ${Badge(projectData)}
  
  </p>
  
  # ${projectData.name}

  ## TABLE OF CONTENTS

  - [Description](#description)
  - [Installation Instructions](#installation)
  - [Contributions](#contributions)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Questions](#questions)

  </br>

  ## Description

  ### ${projectData.description}

  </br>

  ## Installation

  ### ${projectData.installInstructions}

  </br>

  ## Contributions

  ### ${projectData.contribution}

  </br>

  ## Usage
  
  ### ${projectData.usage}

  </br>

  ## Tests

  ### ${projectData.test}

  </br>

  ## Questions

  #### Email: ${projectData.email}
  #### Github: https://github.com/${projectData.github}

  `

}



module.exports = templateData => {
    return generateREADME(templateData);
}


