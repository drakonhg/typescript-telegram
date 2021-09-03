import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    // eslint-disable-next-line no-console
    console.log('It is starting now')
    const name: string = core.getInput('name')
    // eslint-disable-next-line no-console
    console.log(name)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
