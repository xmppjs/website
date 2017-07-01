import React from 'react'
import Header from './Header'

const Layout = ({children, title, packages, plugins, pathname}) => (
	<div>
		<Header title={title} packages={packages} plugins={plugins} pathname={pathname}/>
		<div className="content">
			{children}
		</div>
		<style jsx>{`
			.content {
				padding: 15px;
				max-width: 720px;
				margin: auto;
			}
		`}</style>
	</div>
)

export default Layout
