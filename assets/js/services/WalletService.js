import Service from "./Service";

class WalletService extends Service {

    getTrainerWalletData = () => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0) {
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }

        return this.send('trainer/wallet', {
            timezone
        })
    }

    saveTrainerPrice = (data) => {
        return this.send('trainer/wallet/update/price', data)
    }

    updatePayPal = payPal => {
        return this.send('trainer/wallet/update/paypal', {payPal})
    }

    checkout = () => {
        return this.send('trainer/wallet/checkout')
    }
}

export default new WalletService;