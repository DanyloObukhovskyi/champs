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

    getWalletDataForBlogs = () => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0) {
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }

        return this.send('trainer/walletBlog', {
            timezone
        })
    }

    saveTrainerPrice = (data) => {
        return this.send('trainer/wallet/update/price', data)
    }

    updatePayPal = payPal => {
        return this.send('trainer/wallet/update/paypalBlog', {payPal})
    }

    updatePayPalBlog = payPal => {
        return this.send('trainer/wallet/update/paypalBlog', {payPal})
    }

    checkout = () => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0) {
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }

        return this.send('trainer/wallet/checkout', {
            timezone
        })
    }

    checkoutBlog = () => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0) {
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }

        return this.send('trainer/wallet/checkoutBlog', {
            timezone
        })
    }
}

export default new WalletService;