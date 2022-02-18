import { useQuery, gql } from '@apollo/client'
import React, { useState } from 'react'
import Layout from '@components/Layout/Layout'
import { Card } from 'semantic-ui-react'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'

import { useGetAllAvosQuery, useGetAvoQuery } from '../service/graphql'

const avocadoFragment = `
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
`
const useAvocados = () => {
  const query = gql`
    query GetAllAvos{
      avos {
        ${avocadoFragment}
      }
    }
  `
  return useQuery(query)
}

const useAvocado = (id: number | string) => {
  const query = gql`
    query GetAvo($avoId: ID!){
      avo(id: $avoId) {
        ${avocadoFragment}
      }
    }
  `
  return useQuery(query, { variables: { avoId: id } })
}

const HomePage = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const { data, loading } = useGetAllAvosQuery()
  console.log({ data, loading })

  return (
    <Layout title="Home">
      <KawaiiHeader />
      <div style={{ margin: '2rem 0' }}>
        <button onClick={() => setIsEnabled(true)}>Fetch Child</button>
        {isEnabled && <ChildComponent />}
      </div>
      <Card.Group itemsPerRow={2} centered>
        {documentationList.map((doc) => (
          <Card
            key={doc.link}
            href={doc.link}
            header={doc.title}
            meta={doc.meta}
            description={doc.description}
          />
        ))}
      </Card.Group>
    </Layout>
  )
}

function ChildComponent() {
  const { data, loading } = useGetAvoQuery({
    variables: {
      avoId: '1',
    },
  })
  console.log('Single avocado', { data, loading })
  return <p>Mounted</p>
}

const documentationList = [
  {
    title: 'Documentación Proyecto',
    meta: 'Proyecto',
    description:
      '¿Tienes dudas sobre este proyecto? Aquí encuentras la documentación para configurar todo. Aségurate de leerlo.',
    link: 'https://github.com/jonalvarezz/platzi-graphql-fullstack',
  },
  {
    title: 'Documentación Next.js',
    meta: 'Documentación',
    description:
      'Aquí encuentras la documentación sobre el framework base con el que realizaremos todo.',
    link: 'https://nextjs.org/docs/getting-started',
  },
  {
    title: 'Documentación GraphQL',
    meta: 'Documentación',
    description:
      'Nuestra aplicación conecta a Contenful para leer todo el contenido que mostraremos. Contenful provee la capa de GraphQL.',
    link: 'https://graphql.org/learn/',
  },
  {
    title: 'Curso de GraphQL con Node.js',
    meta: 'Proyecto',
    description:
      'Revisa el curso en donde creamos todo el backend y la API para este proyecto.',
    link: 'https://platzi.com/cursos/graphql-nodejs/',
  },
]

export default HomePage
