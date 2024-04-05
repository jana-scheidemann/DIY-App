import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  right: 36px;
  top: 36px;
}

.bm-burger-bars {
  background: #373a47;
}

.bm-burger-bars-hover {
  background: #373a47;
}

.bm-cross-button {
  fill: #b8b7ad;
  position: absolute;
  width: 30px;
  height: 30px;
  right: 20px;
  top: 20px;
}

.bm-cross {
  background: #373a47;
}

.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.bm-item {
  display: inline-block;

  color: #b8b7ad;
  margin-bottom: 10px;
  text-align: left;
  text-decoration: none;
  transition: color 0.2s;
}

.bm-item:hover {
  color: #b8b7ad;
}
`;
