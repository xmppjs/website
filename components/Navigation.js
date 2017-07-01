import Link from 'next/link'
import React from 'react'


export default ({pathname}) => {
	function isActive(href) {
		return pathname && pathname.replace(/\/$/, '') === href.replace(/\/$/, '') ? 'active' : ''
	}

	return (
		<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
			<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"/>
			</button>
			<a href="/" className="navbar-brand">xmpp.js</a>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a href="/client" className={`nav-link ${isActive('/client')}`}>client</a>
					</li>
					<li className="nav-item">
						<a  href="/component" className={`nav-link ${isActive('/component')}`}>component</a>
					</li>
					<li className="nav-item">
						<a href="/xml" className={`nav-link ${isActive('/xml')}`}>xml</a>
					</li>
					<li className="nav-item">
						<a href="/plugins" className={`nav-link ${isActive('/plugins')}`}>plugins</a>
					</li>
					{/*
					<li className="nav-item">
						<a href="/packages" className={`nav-link ${isActive(`/packages`)}`}>packages</a>
					</li>
					*/}
				</ul>
			</div>
			<style jsx>{`
			`}</style>
		</nav>
	)
}
