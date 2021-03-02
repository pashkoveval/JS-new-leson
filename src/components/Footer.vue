<template>
  <footer class="footer">
    <div class="footer-block">
      <p>© 2021 Brand All Rights Reserved.</p>
      <div class="links">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-pinterest-p"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "vfooter",
};
</script>

<style lang="scss" scoped>
.footer {
  min-height: 79px;
  background: #222224;
  &-block {
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: inherit;
    p {
      color: #fff;
      font-size: 16px;
    }
    .links {
      display: flex;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        color: #000;
        font-size: 16px;
        padding: 5px;
        background: #fff;
        transition: all 0.3s;
        margin: 0 4px;
        &:hover {
          background: $pink;
          color: #fff;
        }
      }
    }

    @media (max-width: 768px) {
      p {
        display: flex;
        margin-top: 30px;
      }
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
    }
  }
}
</style>