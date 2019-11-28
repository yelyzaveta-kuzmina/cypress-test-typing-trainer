module.exports = {
  mainPageText: 'div[test-handle="text"]',
  mainPagePoemName: 'div[test-handle="poem-name"]',
  mainPageBurgerMenuButton: "#root > div:nth-child(1) > div:nth-child(3) > div",
  mainPageRestartButton: 'button[test-handle="restart-button"]',

  burgerMenu: ".bm-menu",
  burgerMenuList:
    "#root > div:nth-child(1) > div.bm-menu-wrap > div.bm-menu > nav",
  burgerMenuPoemItem: ".bm-item",
  burgerMenuCloseButton: ".bm-cross-button",

  activeLetter: 'span[test-handle="active-letter"]'
};
