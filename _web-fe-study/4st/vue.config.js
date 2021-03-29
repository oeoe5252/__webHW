// vue.config.js
// 글로벌로 1번만 호출되는게 아니라, 각 컨포넌트마다 호출된다. 중복코드 발생함.
module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/assets/scss/_mixins.scss";
            @import "@/assets/scss/_base.scss";
          `
        }
      }
    }
  }