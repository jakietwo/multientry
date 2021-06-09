<template>
  <div class="app">页面2</div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      lang: 0,
      meet_link: "https://j.futunn.com/002p60",
      title: "新城悦服务",
      subtitle: "尊享路演电话会",
      start_at: 1622793600,
      end_at: 1622797200,
      banner: "https://pubimg.futunn.com/2021060302942773952b015526b.png",
      meet_issue: [
        "新城悦未来的增长规划及驱动因素",
        "如何进行差异化的拓展",
        "如何在增值服务方面突出重围",
      ],
      meet_ring: [
        {
          name: "公司业务简介与发展历史",
          start_at: 1622793600,
          end_at: 1622794200,
        },
        {
          name: "财务状况与投资亮点",
          start_at: 1622794200,
          end_at: 1622794800,
        },
        {
          name: "未来发展规划与策略",
          start_at: 1622794800,
          end_at: 1622795400,
        },
        {
          name: "专业投资者提问交流",
          start_at: 1622795400,
          end_at: 1622797200,
        },
      ],
      meet_bright_spot: [
        "新城悦服务是中国快速发展的物业管理服务供应商，根据中指院发布的中国物业百强企业，新城悦服务的排名由2010年的第34位上升至2020年的第11位。",
        "从财务表现来看，新城悦服务的营收、净利均保持着强劲增长，近五年CAGR分别高达38%和60%，同期其盈利能力也显著提高，净利率由9%提升至17%。",
        "作为新城悦服务未来业绩蓄水池的物管储备面积高达1.02亿平方米，超过其当前1.01亿平方米的在管面积，足以再造一个新城悦服务。",
      ],
      stocks: ["01755.HK"],
      funds: [],
      showActEndModal: false,
      activeKey: "meet",
      stocksList: [],
      fundsList: [],
      infosList: [],
      showPiModal: false,
      showSignModal: false,
      intersectionObserver: null,
      isTabSticky: false,
      btnStatus: 0,
      btnText: 0,
      signModalData: {},
      guestShare: {},
    };
  },
};
</script>
<style lang="less" scoped>
.app {
  box-sizing: border-box;
  max-width: 7.5rem;
  height: 10rem;
  margin: 0 auto;
  background: #1a1d24;

  .main {
    position: relative;
    padding-bottom: 1.7rem;
    background: #1e2635;

    .tab-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      position: sticky;
      top: 0;
      width: 100%;
      height: 1rem;
      z-index: 1000;

      .active {
        background-image: url("./images/activeTab.png");
        background-size: contain;
        background-repeat: no-repeat;
        color: #ffffff;
      }

      .no_active {
        background-image: url("./images/tab.png");
        background-size: contain;
        background-repeat: no-repeat;
        color: #5e78b9;
      }

      .meet-tab {
        width: 3.23rem;
        height: 0.65rem;
        line-height: 0.65rem;
        text-align: center;
        font-size: 0.36rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
      }

      .active {
        width: 3.36rem;
      }

      .meet-introduction {
        margin-right: 0.32rem;
      }
    }

    .meet-main {
      width: 7.5rem;
    }
  }
}

.isSticky {
  background-color: #2c3c62;
}

.split {
  width: 100%;
  height: 0.3rem;
}

.question-wrap {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  right: 0;
  top: calc(66vh - 1.2rem);
  width: 0.7rem;
  height: 2.35rem;
  font-size: 0.28rem;
  color: #fefefe;
  background: url("./images/question.png") no-repeat;
  background-size: cover;

  .content {
    width: 0.28rem;
    margin-left: 0.02rem;
    word-wrap: break-word;
    word-break: break-all;
  }
}
</style>
