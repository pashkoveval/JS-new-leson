<template>
  <div class="home">
    <a href="#items" v-if="scrollHeight" class="up-btn"><span>Up</span></a>
    <div class="baner">
      <div class="baner__left dfc">
        <img src="../assets/banerMan.png" alt="Baner Man" />
      </div>
      <div class="baner__right dfc">
        <div class="baner__right--title dfc">
          <div class="text df">
            <p>THE BRAND</p>
            <span>OF LUXERIOUS <span class="pink">FASHION</span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="categories">
      <div class="categories-body">
        <div class="ferst__line">
          <a href="#" class="card df">
            <img src="../assets/wm.png" alt="" />
            <div class="mask"></div>
            <div class="text dfc">
              <p>30% OFF</p>
              <h2>FOR WOMEN</h2>
            </div>
          </a>
          <a href="#" class="card df">
            <img src="../assets/m.png" alt="" />
            <div class="mask"></div>
            <div class="text dfc">
              <p>HOT DEAL</p>
              <h2>FOR MEN</h2>
            </div>
          </a>
          <a href="#" class="card df">
            <img src="../assets/c.png" alt="" />
            <div class="mask"></div>
            <div class="text dfc">
              <p>NEW ARRIVALS</p>
              <h2>FOR KIDS</h2>
            </div>
          </a>
        </div>
        <div class="second__line df">
          <a href="#" class="card df">
            <img src="../assets/a.png" alt="" />
            <div class="mask"></div>
            <div class="text dfc">
              <p>LUXIROUS & TRENDY</p>
              <h2>ACCESORIES</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="titel-product-list" id="items">
      <h2 class="titel-product-list-h2">Fetured Items</h2>
      <p class="titel-product-list-p">
        Shop for items based on what we featured in this week
      </p>
    </div>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
export default {
  name: "Home",
  components: {
    ProductList,
  },
  data() {
    return {
      scrollHeight: false,
    };
  },
  methods: {
    onScroll() {
      if (window.scrollY >= 2000) {
        this.scrollHeight = true;
      } else {
        this.scrollHeight = false;
      }
    },
  },
  mounted() {},
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss">
.home {
  position: relative;
}
.baner {
  height: 764px;
  width: 100%;
  display: flex;
  margin-bottom: 60px;
  &__left {
    width: 50%;
    & img {
      max-width: 100%;
    }
  }
  &__right {
    width: 50%;
    height: 100%;
    background: #f1e4e6;
    display: flex;
    align-items: center;
    justify-content: start;
    &--title {
      height: fit-content;
      margin-left: 64px;
      border-left: 12px solid $pink;
      .text {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        font-size: 48px;
        line-height: 30px;
        color: 222px;
        font-weight: bold;
        span {
          font-size: 32px;
          .pink {
            color: $pink;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    & {
      height: 369px;
      &__right {
        &--title {
          margin-left: 40px;
          .text {
            font-size: 44px;
            span {
              &:nth-child(1) {
                font-size: 24px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 580px) {
    & {
      height: 369px;
      &__left {
        display: none;
      }
      &__right {
        width: 100%;
        justify-content: center;
        &--title {
          margin: 0;

          .text {
            font-size: 38px;
            span {
              &:nth-child(1) {
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
}
.categories {
  margin: 60px 0;
  &-body {
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
  }
  .ferst__line {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: space-evenly;
      .card {
        max-width: 45%;
      }
    }
    @media (max-width: 580px) {
      flex-direction: column;
      .card {
        max-width: 100%;
      }
    }
  }
  .second__line {
    display: flex;
    margin-top: 30px;
  }
  .card {
    position: relative;
    overflow: hidden;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba($color: #211616, $alpha: 0.7);
    }
    .text {
      z-index: 2;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      flex-direction: column;

      p {
        font-size: 16px;
        color: #fff;
      }
      h2 {
        font-size: 24px;
        color: $pink;
        margin-top: 10px;
      }
    }
    & > img {
      max-width: 100%;
      min-height: 111px;
      object-fit: cover;
      object-position: center;
      transition: all 0.7s;
    }
  }
}
.titel-product-list {
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  &-h2 {
    color: #222;
    font-size: 30px;
  }
  &-p {
    font-size: 14px;
    color: #9f9f9f;
    margin: 6px 0 45px 0;
  }
}
.up-btn {
  position: fixed;
  min-width: 25px;
  right: 10vw;
  bottom: 10vh;
  font-size: 18px;
  background: $pink;
  padding: 5px;
  transition: all 0.3s;
  text-decoration: none;
  color: #fff;
  a {
  }
  &::before {
    content: "";
    position: absolute;
    top: -11px;
    left: 4px;
    width: 25px;
    height: 25px;
    background: $pink;
    z-index: -1;
    transform: rotate(45deg);
  }
  &:hover {
    transform: scale(1.1);
  }
}
</style>

