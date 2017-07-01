import Link from 'next/link'
import Layout from '../components/Layout'
import { Component } from 'react'
import Markdown from 'react-remarkable'

class Page extends Component {
  render() {
    return (
      <Layout pathname={this.props.pathname} title="component">
        <Markdown source={this.props.markdown} options={{linkify: true, breaks: true, typographer: true}}/>
      </Layout>
    )
  }
}

Page.getInitialProps = async ({pathname}) => {
  const fetch = await import('isomorphic-fetch')
  return {
    pathname,
    markdown: await fetch(`http://localhost:3000/api/docs/component`).then((data) => data.text())
  }
}

export default Page
