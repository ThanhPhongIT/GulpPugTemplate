window.onload = () => {
  const tab = {
    init: function () {
      this.clickTab();
    },
    clickTab: function () {
      const tabBtn = document.querySelectorAll(
        ".dashboard__center__tabList .tabList__item  .item__link"
      );
      const tabPanel = document.querySelectorAll(".tabs__item");

      tabBtn.forEach((item) =>
        item.addEventListener("click", (e) => {
          //add class activeTab by element's click and remove class activeTab other
          const self = e.target;

          tabBtn.forEach((btn) => btn.classList.remove("activeTab"));
          self.classList.add("activeTab");
          const panel = document.getElementById(self.dataset.text);
          tabPanel.forEach((tab) => tab.classList.remove("activeTab"));
          panel.classList.add("activeTab");
        })
      );
    },
  };
  tab.init();
  const accodions = {
    init: function () {
      this.subAccodion1(
        ".section",
        ".section li h2",
        ".section_lv2",
        ".arrow_lv1"
      );
      this.subAccodion1(
        ".section_lv2",
        ".section_lv2 li h4",
        ".section_lv3",
        ".arrow_lv2"
      );
    },
    subAccodion1: function (wrap, button, item, arrow) {
      const self = document.querySelectorAll(wrap);
      self.forEach((i) => {
        const buttons = i.querySelectorAll(button);
        const items = i.querySelectorAll(item);
        const arrows = i.querySelector(arrow);
        buttons.forEach((btn, index) =>
          btn.addEventListener("click", () => {
            buttons[index].classList.toggle("active");
            items[index].classList.toggle("active");
            arrows.classList.toggle("active");
          })
        );
      });
    },
  };
  accodions.init();
};
