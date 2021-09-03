import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    core.debug('It is working')
    const name: string = core.getInput('name')
    core.debug(name.big())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
