import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('audit', () => {
  it('runs audit cmd', async () => {
    const {stdout} = await runCommand('audit')
    expect(stdout).to.contain('hello world')
  })

  it('runs audit --name oclif', async () => {
    const {stdout} = await runCommand('audit --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
