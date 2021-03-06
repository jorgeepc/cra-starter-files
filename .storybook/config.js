import { addDecorator, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/stories', true, /\.stories\.tsx$/)

addDecorator(withInfo)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
