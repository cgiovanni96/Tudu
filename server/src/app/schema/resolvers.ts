import BaseResolver from '../../resolver/base'
import TodoResolver from '../../resolver/todo'
import TagResolver from '../../resolver/tag'

export default [BaseResolver, TodoResolver, TagResolver] as const
