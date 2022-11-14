<template>
    <div class="pop-up dialog blur">
        <div class="dialog-container">
            <div class="dialog__content">
                <MsMessageContent v-if="this.status === 0">
                    <div class="dialog--icon">
                        <i class="fa-solid fa-circle-check" style="color: #3bdb66"></i>
                    </div>
                    <div class="dialog--msg">Đặt phòng thành công</div>
                </MsMessageContent>
                <MsMessageContent v-if="this.status === 1">
                    <div class="dialog--icon">
                        <i class="fa-solid fa-triangle-exclamation" style="color: red;"></i>
                    </div>
                    <div class="dialog--msg">Phòng này đã có người đặt. Vui lòng chọn phòng khác</div>
                </MsMessageContent>
                <MsMessageContent v-if="this.status === 2">
                    <div class="dialog--icon">
                        <i class="fa-solid fa-triangle-exclamation"/>
                    </div>
                    <div class="dialog--msg">Vui lòng điền đầy đủ thông tin</div>
                </MsMessageContent>
                
            </div>
            <div class="dialog__button">
                <div CommandType="confirm" class="cancel" @click="closeMessage">Đồng ý</div>
            </div>
        </div>
    </div>
</template>

<script>
import MsMessageContent from '../parts/ms-messageContent.vue';

export default {
    name: 'MsMessage',
    components: {
        MsMessageContent
    },
    props: ['orderStatus'],
    data() {
        return {
            status: this.orderStatus,
            close: false
        }
    },
    methods: {
        closeMessage() {
            this.$emit('closeMessage', this.close);
        }
    },
}
</script>