import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Represents a date time object */
  DateTime: any;
};

export type Attributes = {
  __typename?: 'Attributes';
  description?: Maybe<Scalars['String']>;
  hardiness?: Maybe<Scalars['String']>;
  shape?: Maybe<Scalars['String']>;
  taste?: Maybe<Scalars['String']>;
};

export type AvoCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  hardiness?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  shape?: InputMaybe<Scalars['String']>;
  sku: Scalars['String'];
  taste?: InputMaybe<Scalars['String']>;
};

export type AvoWhereInput = {
  name?: InputMaybe<StringFilterInput>;
  price?: InputMaybe<Scalars['Float']>;
};

export type Avocado = BaseModel & {
  __typename?: 'Avocado';
  attributes: Attributes;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  sku: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BaseModel = {
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAvo: Avocado;
};


export type MutationCreateAvoArgs = {
  data: AvoCreateInput;
};

export type Query = {
  __typename?: 'Query';
  avo?: Maybe<Avocado>;
  avos: Array<Maybe<Avocado>>;
};


export type QueryAvoArgs = {
  id: Scalars['ID'];
};


export type QueryAvosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AvoWhereInput>;
};

export type StringFilterInput = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type GetAllAvosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAvosQuery = { __typename?: 'Query', avos: Array<{ __typename?: 'Avocado', id: string, image: string, name: string, createdAt: any, sku: string, price: number, attributes: { __typename?: 'Attributes', description?: string | null, taste?: string | null, shape?: string | null, hardiness?: string | null } } | null> };

export type GetAvoQueryVariables = Exact<{
  avoId: Scalars['ID'];
}>;


export type GetAvoQuery = { __typename?: 'Query', avo?: { __typename?: 'Avocado', id: string, image: string, name: string, createdAt: any, sku: string, price: number, attributes: { __typename?: 'Attributes', description?: string | null, taste?: string | null, shape?: string | null, hardiness?: string | null } } | null };


export const GetAllAvosDocument = gql`
    query GetAllAvos {
  avos {
    id
    image
    name
    createdAt
    sku
    price
    attributes {
      description
      taste
      shape
      hardiness
    }
  }
}
    `;

/**
 * __useGetAllAvosQuery__
 *
 * To run a query within a React component, call `useGetAllAvosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAvosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAvosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAvosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAvosQuery, GetAllAvosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAvosQuery, GetAllAvosQueryVariables>(GetAllAvosDocument, options);
      }
export function useGetAllAvosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAvosQuery, GetAllAvosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAvosQuery, GetAllAvosQueryVariables>(GetAllAvosDocument, options);
        }
export type GetAllAvosQueryHookResult = ReturnType<typeof useGetAllAvosQuery>;
export type GetAllAvosLazyQueryHookResult = ReturnType<typeof useGetAllAvosLazyQuery>;
export type GetAllAvosQueryResult = Apollo.QueryResult<GetAllAvosQuery, GetAllAvosQueryVariables>;
export const GetAvoDocument = gql`
    query GetAvo($avoId: ID!) {
  avo(id: $avoId) {
    id
    image
    name
    createdAt
    sku
    price
    attributes {
      description
      taste
      shape
      hardiness
    }
  }
}
    `;

/**
 * __useGetAvoQuery__
 *
 * To run a query within a React component, call `useGetAvoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvoQuery({
 *   variables: {
 *      avoId: // value for 'avoId'
 *   },
 * });
 */
export function useGetAvoQuery(baseOptions: Apollo.QueryHookOptions<GetAvoQuery, GetAvoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAvoQuery, GetAvoQueryVariables>(GetAvoDocument, options);
      }
export function useGetAvoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAvoQuery, GetAvoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAvoQuery, GetAvoQueryVariables>(GetAvoDocument, options);
        }
export type GetAvoQueryHookResult = ReturnType<typeof useGetAvoQuery>;
export type GetAvoLazyQueryHookResult = ReturnType<typeof useGetAvoLazyQuery>;
export type GetAvoQueryResult = Apollo.QueryResult<GetAvoQuery, GetAvoQueryVariables>;