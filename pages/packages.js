import Link from 'next/link'
import Layout from '../components/Layout'

const Page = ({ packages, pathname }) => (
  <Layout title="packages" pathname={pathname}>
    <ul>
      {packages.map(pkg => (
        <li key={pkg}>
          <a href={`/packages/${pkg}`}>{pkg}</a>
        </li>
      ))}
    </ul>
  </Layout>
)

Page.getInitialProps = async ({pathname}) => {
  const fetch = await import('isomorphic-fetch')
  return {
    packages: await fetch('http://localhost:3000/api/packages').then((data) => data.json()),
    pathname
  }
}

export default Page
