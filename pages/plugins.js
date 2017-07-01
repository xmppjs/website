import Link from 'next/link'
import Layout from '../components/Layout'

const Page = ({ plugins, pathname }) => (
  <Layout title="plugins" pathname={pathname}>
    <ul>
      {plugins.map(plugin => (
        <li key={plugin}>
          <a href={`/plugins/${plugin}`}>{plugin}</a>
        </li>
      ))}
    </ul>
  </Layout>
)

Page.getInitialProps = async ({pathname}) => {
  const fetch = await import('isomorphic-fetch')
  return {
    plugins: await fetch('http://localhost:3000/api/plugins').then((data) => data.json()),
    pathname
  }
}

export default Page
