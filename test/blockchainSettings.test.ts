import { ChainId, Currency, MATIC } from 'kaki-sdk'
import { Blockchain, BLOCKCHAIN_SETTINGS } from '../src'

describe('BlockchainSettings', () => {
  it('can correctly determine blockchain settings', () => {
    const settings = BLOCKCHAIN_SETTINGS[ChainId.MATIC_MAINNET]
    expect(settings.chainId).toEqual(ChainId.MATIC_MAINNET)
    expect(settings.blockchain).toEqual(Blockchain.MATIC)
    expect(settings.name).toEqual('Matic Mainnet')
    expect(settings.rpcURLs).toHaveLength(3)
    expect(settings.rpcURLs?.[0]).toEqual('https://polygon-mainnet.g.alchemy.com/v2/kW-q3YoEOkX569sCP0vXqoPp65PzYai2')
    expect(settings.rpcAPIKey).toBeUndefined()
    expect(settings.explorerURL).toEqual('https://polygonscan.com/')
    expect(settings.blockTime).toEqual(2)
    expect(settings.randomRpcURL()).not.toBeUndefined()

    expect(settings.currency).not.toBeNull()
    expect(settings.currency).toBeInstanceOf(Currency)
    expect(settings.currency).toEqual(MATIC)
  })
})
