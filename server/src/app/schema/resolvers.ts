import BaseResolver from '../../resolver/base'
import StatusResolver from '../../resolver/status'
import TodoResolver from '../../resolver/todo'

export default [BaseResolver, TodoResolver, StatusResolver] as const
