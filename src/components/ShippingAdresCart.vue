<template>
  <div class="cart__adress">
    <div class="adres">
      <span>SHIPPING ADRESS</span>
      <form action="#" class="df">
        <input type="text" placeholder="Bangladesh" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="Postcode / Zip" />
        <button>GET A QUOTE</button>
      </form>
    </div>
    <div class="total">
      <span class="subtotal"
        >SUB TOTAL <span>${{ cartTotal }}</span></span
      >
      <span class="grandtotal">
        GRAND TOTAL <span>${{ cartTotal }}</span>
      </span>
      <span class="line"></span>
      <button>PROCEED TO CHECKOUT</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "shipping-adres-cart",
  data() {
    return {
      totalSum: Number,
    };
  },

  computed: {
    ...mapGetters(["CART"]),
    cartTotal() {
      if (this.CART.length) {
        let result = [];

        for (let item of this.CART) {
          result.push(item.price * item.quantity);
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        });

        return result;
      } else {
        return 0;
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.cart {
  &__adress {
    display: flex;
    justify-content: start;
    flex-direction: column;
    max-width: 360px;
    width: 100%;
    span {
      font-size: 16px;
    }
    .adres {
      width: inherit;
      form {
        flex-direction: column;
        width: 100%;
        input {
          width: 100%;
          border: 1px solid #a4a4a4;
          height: 45px;
          padding: 0 17px;
          margin-top: 20px;
          &::placeholder {
            color: #222;
          }
          &:nth-child(1) {
            &::placeholder {
              color: #b1b1b1;
            }
          }
        }
        button {
          width: 100px;
          border: 1px solid #a4a4a4;
          height: 45px;
          background: none;
          margin-top: 20px;
        }
      }
    }
    .total {
      display: flex;
      width: 100%;
      margin-top: 57px;
      flex-direction: column;
      text-align: right;
      height: 214px;
      background: #f5f3f3;
      justify-content: center;
      padding: 37px;
      .subtotal {
        font-size: 11px;
        & span {
          font-size: 11px;
          margin-left: 30px;
        }
      }
      .grandtotal {
        font-size: 16px;
        margin-top: 12px;
        span {
          color: $pink;
          margin-left: 30px;
        }
      }
      .line {
        height: 1px;
        width: 100%;
        background: #e2e2e2;
        margin: 21px 0 17px 0;
        align-self: center;
      }
      button {
        background: none;
        height: 50px;
        width: 100%;
        background: $pink;
        align-self: center;
        color: #fff;
        transition: all 0.3s;
        &:hover {
          background: darken($color: $pink, $amount: 5);
        }
      }
    }
  }
}
</style>