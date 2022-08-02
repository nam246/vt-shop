<template>
  <footer class="bg-second">
        <div class="container">
            <div class="row">
                <div class="col-3 col-md-6">
                    <h3 class="footer-head">Products</h3>
                    <ul class="menu">
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">product help</a></li>
                        <li><a href="#">warranty</a></li>
                        <li><a href="#">order status</a></li>
                    </ul>
                </div>
                <div class="col-3 col-md-6">
                    <h3 class="footer-head">services</h3>
                    <ul class="menu">
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">product help</a></li>
                        <li><a href="#">warranty</a></li>
                        <li><a href="#">order status</a></li>
                    </ul>
                </div>
                <div class="col-3 col-md-6">
                    <h3 class="footer-head">support</h3>
                    <ul class="menu">
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">product help</a></li>
                        <li><a href="#">warranty</a></li>
                        <li><a href="#">order status</a></li>
                    </ul>
                </div>
                <div class="col-3 col-md-6 col-sm-12">
                    <div class="contact">
                        <h3 class="contact-header">
                            VTShop
                        </h3>
                        <ul class="contact-socials">
                            <li><a href="#">
                                    <i class='bx bxl-facebook-circle'></i>
                                </a></li>
                            <li><a href="#">
                                    <i class='bx bxl-instagram-alt'></i>
                                </a></li>
                            <li><a href="#">
                                    <i class='bx bxl-youtube'></i>
                                </a></li>
                            <li><a href="#">
                                    <i class='bx bxl-twitter'></i>
                                </a></li>
                        </ul>
                    </div>
                    <div class="subscribe">
                        <input type="email" placeholder="ENTER YOUR EMAIL">
                        <button>subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

footer {
    padding: 100px 0;
}

.footer-head {
    margin-bottom: 20px;
    text-transform: uppercase;
}

footer ul li {
    margin-bottom: 10px;
}

.contact-header {
    text-align: center;
    font-weight: 600;
    margin-bottom: 30px;
    font-size: 38px;
}

.contact-socials {
    display: flex;
    justify-content: center;
}

.contact-socials a {
    font-size: 30px;
    margin: 0 10px;
}

.contact-socials a:hover {
    color: var(--grey);
}

.menu li a {
    text-transform: capitalize;
    transition: transform 0.3s ease-in-out;
}

.menu li a:hover {
    color: var(--red);
    transform: translateX(10px);
}

.subscribe {
    position: relative;
    margin-top: 20px;
}

.subscribe input {
    width: 100%;
    height: 50px;
    outline: 0;
    border: 0;
    padding: 0 30px;
}

.subscribe button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    outline: 0;
    border: 0;
    background-color: var(--red);
    color: var(--btn-color);
    padding: 10px;
    text-transform: uppercase;
}

.subscribe button:hover {
    background-color: var(--black);
}
</style>