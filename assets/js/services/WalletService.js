import Service from "./Service";

class WalletService extends Service {

    getTrainerWalletData = () => {
        return this.send('trainer/wallet')
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