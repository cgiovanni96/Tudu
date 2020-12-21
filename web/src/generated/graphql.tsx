/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  todos: Array<Todo>;
  todo?: Maybe<Todo>;
  tags?: Maybe<Array<Tag>>;
  tag?: Maybe<Tag>;
};


export type QueryTodoArgs = {
  name: Scalars['String'];
};


export type QueryTagArgs = {
  name: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  dueDate: Scalars['DateTime'];
  status: Scalars['String'];
  tags?: Maybe<Array<Tag>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  slug: Scalars['String'];
  descriptionSnippet: Scalars['String'];
};


export type Tag = {
  __typename?: 'Tag';
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: Scalars['String'];
  name: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: Todo;
  deleteTodo?: Maybe<Scalars['Boolean']>;
  updateTodo?: Maybe<Scalars['Boolean']>;
  completeTodo?: Maybe<Scalars['Boolean']>;
  addTag?: Maybe<Tag>;
};


export type MutationAddTodoArgs = {
  data: AddTodoInputType;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['String'];
};


export type MutationUpdateTodoArgs = {
  data: UpdateTodoInputType;
  name: Scalars['String'];
};


export type MutationCompleteTodoArgs = {
  id: Scalars['String'];
};


export type MutationAddTagArgs = {
  data: AddTagInputType;
};

export type AddTodoInputType = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type UpdateTodoInputType = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AddTagInputType = {
  name: Scalars['String'];
  color?: Maybe<Scalars['String']>;
};

export type TagFieldsFragment = { __typename?: 'Tag', ID: string, name: string, color?: Maybe<string> };

export type AddTodoMutationVariables = Exact<{
  data: AddTodoInputType;
}>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo: { __typename?: 'Todo', ID: string, name: string, description: string, status: string } };

export type TagsFragmentFragment = { __typename?: 'Tag', ID: string, name: string, color?: Maybe<string> };

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTagsQuery = { __typename?: 'Query', tags?: Maybe<Array<(
    { __typename?: 'Tag' }
    & TagsFragmentFragment
  )>> };

export type TodosFieldsFragment = { __typename?: 'Todo', ID: string, name: string, description: string, status: string, dueDate: any, tags?: Maybe<Array<(
    { __typename?: 'Tag' }
    & TagFieldsFragment
  )>> };

export type GetAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTodosQuery = { __typename?: 'Query', todos: Array<(
    { __typename?: 'Todo' }
    & TodosFieldsFragment
  )> };

export const TagsFragmentFragmentDoc = gql`
    fragment TagsFragment on Tag {
  ID
  name
  color
}
    `;
export const TagFieldsFragmentDoc = gql`
    fragment TagFields on Tag {
  ID
  name
  color
}
    `;
export const TodosFieldsFragmentDoc = gql`
    fragment TodosFields on Todo {
  ID
  name
  description
  status
  dueDate
  tags {
    ...TagFields
  }
}
    ${TagFieldsFragmentDoc}`;
export const AddTodoDocument = gql`
    mutation AddTodo($data: AddTodoInputType!) {
  addTodo(data: $data) {
    ID
    name
    description
    status
  }
}
    `;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, baseOptions);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const GetAllTagsDocument = gql`
    query GetAllTags {
  tags {
    ...TagsFragment
  }
}
    ${TagsFragmentFragmentDoc}`;

/**
 * __useGetAllTagsQuery__
 *
 * To run a query within a React component, call `useGetAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
        return Apollo.useQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, baseOptions);
      }
export function useGetAllTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
          return Apollo.useLazyQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, baseOptions);
        }
export type GetAllTagsQueryHookResult = ReturnType<typeof useGetAllTagsQuery>;
export type GetAllTagsLazyQueryHookResult = ReturnType<typeof useGetAllTagsLazyQuery>;
export type GetAllTagsQueryResult = Apollo.QueryResult<GetAllTagsQuery, GetAllTagsQueryVariables>;
export const GetAllTodosDocument = gql`
    query GetAllTodos {
  todos {
    ...TodosFields
  }
}
    ${TodosFieldsFragmentDoc}`;

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
export function useGetAllTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
        return Apollo.useQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, baseOptions);
      }
export function useGetAllTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
          return Apollo.useLazyQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, baseOptions);
        }
export type GetAllTodosQueryHookResult = ReturnType<typeof useGetAllTodosQuery>;
export type GetAllTodosLazyQueryHookResult = ReturnType<typeof useGetAllTodosLazyQuery>;
export type GetAllTodosQueryResult = Apollo.QueryResult<GetAllTodosQuery, GetAllTodosQueryVariables>;