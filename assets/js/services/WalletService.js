import Service from "./Service";

class WalletService extends Service {

    getTrainerWalletData = () => {
        return this.send('trainer/wallet')
    }

    saveTrainerPrice = (data) => {
        return this.send('trainer/wallet/update/price', data)
    }
}

export default new WalletService;