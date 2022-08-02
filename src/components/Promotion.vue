<template>
  <!-- promotion section -->
    <div class="promotion">
        <div class="row">
            <div class="col-4 col-md-12 col-sm-12">
                <div class="promotion-box">
                    <div class="text">
                        <h3>Headphone & Earbuds</h3>
                        <button class="btn-flat btn-hover"><span>shop collection</span></button>
                    </div>
                    <img src="../assets/images/JBLHorizon_001_dvHAMaster.png" alt="">
                </div>
            </div>
            <div class="col-4 col-md-12 col-sm-12">
                <div class="promotion-box">
                    <div class="text">
                        <h3>JBL Quantum Series</h3>
                        <button class="btn-flat btn-hover"><span>shop collection</span></button>
                    </div>
                    <img src="../assets/images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png" alt="">
                </div>
            </div>
            <div class="col-4 col-md-12 col-sm-12">
                <div class="promotion-box">
                    <div class="text">
                        <h3>True Wireless Earbuds</h3>
                        <button class="btn-flat btn-hover"><span>shop collection</span></button>
                    </div>
                    <img src="../assets/images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- end promotion section -->
</template>

<script setup>

</script>

<style lang="scss" scoped>

.promotion {
    padding: 15px;

    .promotion [class*="col-"] {
        padding: 15px;
    }
    
    .promotion-box {
        display: flex;
        background-color: var(--third-bg-color);
        position: relative;

        .text {
            flex-grow: 1;
            padding: 20px;

            h3 {
                font-size: 25px;
            }

            button {
                margin-top: 30px;
            }
        }

        img {
            width: 150px;
            transition: transform 0.3s ease-in-out;
        }

        &:hover img {
            transform: scale(1.1);
        }
    }
}
</style>