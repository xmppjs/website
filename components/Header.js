import Head from 'next/head'
import React from 'react'

import Navigation from './Navigation'

const Header = ({title = '', pathname}) => (
	<div>
		<Head>
			<title>{title ? `xmpp.js - ${title}` : `xmpp.js`}</title>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			<link rel="icon" type="image/png" href="/static/favicon.png"/>
			<link href="/static/bootstrap.min.css" rel="stylesheet" type="text/css"/>
			<link href="/static/prism.css" rel="stylesheet" type="text/css"/>
			<script src="/static/jquery.slim.min.js"/>
			<script src="/static/bootstrap.min.js"/>
			<script src="/static/prism.js"/>
		</Head>
		<Navigation pathname={pathname}/>
	</div>
)

export default Header
