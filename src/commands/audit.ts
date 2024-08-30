import {Args, Command, Flags} from '@oclif/core'

export default class Audit extends Command {
  static override description = 'ai audit'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    directory: Flags.string({char: 'd', description: 'Specify a directory to list files from'}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Audit)

    const directory = flags.directory ?? process.cwd()
    this.log(`Running audit process...`)
    this.runAudit(directory)
  }

  private runAudit(directory: string) {
    this.log(`Audit completed for ${directory}.`)
  }
}
