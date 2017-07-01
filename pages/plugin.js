import Link from 'next/link'
import Layout from '../components/Layout'
import { Component } from 'react'
import Markdown from 'react-remarkable'

class Page extends Component {
  render() {
    return (
      <Layout pathname={this.props.pathname} title={`plugins/${this.props.pkg.id}`}>
        <Markdown source={this.props.pkg.readme} options={{linkify: true, breaks: true, typographer: true}}/>
      </Layout>
    )
  }
}

Page.getInitialProps = async ({query, pathname}) => {
  const fetch = await import('isomorphic-fetch')
  return {
    id: query.id,
    pathname,
    pkg: await fetch(`http://localhost:3000/api/plugins/${query.id}`).then((data) => data.json())
  }
}

export default Page
