const apiHeader = 'https://localhost:44310/api/v1/';

const RESOURCE = {
    roomType: {
        standard: "Phòng tiêu chuẩn",
        superior: "Phòng Superior", 
        deluxe: "Phòng Deluxe",
        suite: "Phòng Suite",
        exsuite: "Phòng Executive Suite"
    },
    formatMoney: (number) => {
        return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    },
    padTo2Digits: (num) => {
        return num.toString().padStart(2, '0');
    },
    formatDate: function (date) {
        try {
            return [
                this.padTo2Digits(date.getDate()),
                this.padTo2Digits(date.getMonth() + 1),
                date.getFullYear(),
            ].join('/');
        } catch (error) {
            console.log(error);
        }
    },
    connectionString: {
        apiHeaderRoom: `${apiHeader}Room`,
        apiHeaderService: `${apiHeader}Service`,
        apiHeaderHotel: `${apiHeader}Hotels`,
        apiHeaderPayment: `${apiHeader}PaymentMethods`,
        apiHeaderDiscount: `${apiHeader}Discounts`,
        apiHeaderNewOrderCode:`${apiHeader}Orders/new-code`,
        apiHeaderCreateNewOrder: `${apiHeader}Orders`,
        apiHeaderCreateNewUser: `${apiHeader}Customer`
    }
}

export default RESOURCE;