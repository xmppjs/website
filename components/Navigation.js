import Link from "next/link";
import React from "react";

export default ({ pathname }) => {
  function isActive(href) {
    return pathname && pathname.replace(/\/$/, "") === href.replace(/\/$/, "")
      ? "active"
      : "";
  }

  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <a href="/" className="navbar-brand">
        xmpp.js
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/client" className={`nav-link ${isActive("/client")}`}>
              client
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/component"
              className={`nav-link ${isActive("/component")}`}
            >
              component
            </a>
          </li>
          <li className="nav-item">
            <a href="/xml" className={`nav-link ${isActive("/xml")}`}>
              xml
            </a>
          </li>
          <li className="nav-item">
            <a href="/plugins" className={`nav-link ${isActive("/plugins")}`}>
              plugins
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="/packages" className={`nav-link ${isActive(`/packages`)}`}>
              packages
            </a>
          </li> */}
        </ul>
      </div>
      <a href="https://github.com/xmppjs/xmpp.js/">
        <svg
          width="22"
          height="22"
          viewBox="0 0 16 16"
          version="1.1"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </a>
      <style jsx>{``}</style>
    </nav>
  );
};
