import { computed, observable } from 'mobx'

export default class Err {
  @observable name = ''
  @observable message = ''
  @observable stack = ''
  @observable mdMessage = ''
  @observable docsUrl = ''
  @observable templateType = ''
  @observable codeFrames = []

  constructor (props) {
    this.update(props)
  }

  @computed get displayMessage () {
    if (!this.name && !this.message) return ''

    return `${this.name}: ${this.message}`
  }

  @computed get isCommandErr () {
    return /(AssertionError|CypressError)/.test(this.name)
  }

  update (props) {
    if (!props) return

    this.name = props.name
    this.message = props.message
    this.mdMessage = props.mdMessage
    this.stack = props.stack
    this.docsUrl = props.docsUrl
    this.templateType = props.templateType
    this.codeFrames = props.codeFrames
  }
}
