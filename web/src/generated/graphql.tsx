/* eslint-disable */
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
	DateTime: any
}

export type Query = {
	__typename?: 'Query'
	hello: Scalars['String']
	todos: Array<Todo>
}

export type Todo = {
	__typename?: 'Todo'
	/** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
	ID: Scalars['String']
	name: Scalars['String']
	description: Scalars['String']
	dueDate: Scalars['DateTime']
	createdAt: Scalars['DateTime']
	updatedAt: Scalars['DateTime']
}

export type Mutation = {
	__typename?: 'Mutation'
	addTodo: Todo
}

export type MutationAddTodoArgs = {
	data: AddTodoInputType
}

export type AddTodoInputType = {
	name: Scalars['String']
	description?: Maybe<Scalars['String']>
	dueDate?: Maybe<Scalars['DateTime']>
}

export type GetAllTodosQueryVariables = Exact<{ [key: string]: never }>

export type GetAllTodosQuery = { __typename?: 'Query' } & {
	todos: Array<
		{ __typename?: 'Todo' } & Pick<Todo, 'ID' | 'name' | 'description'>
	>
}

export const GetAllTodosDocument = gql`
	query GetAllTodos {
		todos {
			ID
			name
			description
		}
	}
`

/**
 * __useGetAllTodosQuery__
 *
 * To run a query within a React component, call `useGetAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTodosQuery(
	baseOptions?: Apollo.QueryHookOptions<
		GetAllTodosQuery,
		GetAllTodosQueryVariables
	>
) {
	return Apollo.useQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(
		GetAllTodosDocument,
		baseOptions
	)
}
export function useGetAllTodosLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetAllTodosQuery,
		GetAllTodosQueryVariables
	>
) {
	return Apollo.useLazyQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(
		GetAllTodosDocument,
		baseOptions
	)
}
export type GetAllTodosQueryHookResult = ReturnType<typeof useGetAllTodosQuery>
export type GetAllTodosLazyQueryHookResult = ReturnType<
	typeof useGetAllTodosLazyQuery
>
export type GetAllTodosQueryResult = Apollo.QueryResult<
	GetAllTodosQuery,
	GetAllTodosQueryVariables
>
