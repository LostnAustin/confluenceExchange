export const GREEN = "success"
export const RED = "danger"
export const ETHER_ADDRESS = "0x0000000000000000000000000000000000000000"

export const DECIMALS = (10**18)

export const ether = (wei) => {
    if(wei) {
        return(wei / DECIMALS) // 18 decimal places
    }
}
    //tokens and ETH have same decimal settings
export const tokens = ether

// functions below are same but older methods
// export const ether = (n) => {
//     return new web3.utils.BN(
//     web3.utils.toWei(n.toString(), 'ether')
//     )
// }
// export const tokens = (n) => ether(n)


export const formatBalance = (balance) => {
    const precision = 100 // two decimal places

    balance = ether(balance)
    balance = Math.round(balance * precision) / precision // two decimal places
    return balance
}

