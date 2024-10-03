const charity = artifacts.require('./charity.sol')

contract('charity', (account) => {
	before(async () => {
	this.charity = await charity.deployed()
})

	it('deployes successfully', async () => {
		const address = await this.charity.address
		assert.notEqual(address, 0x0)
    		assert.notEqual(address, '')
    		assert.notEqual(address, null)
    		assert.notEqual(address, undefined)
  	})

	it('lists charitys', async () => {
		
		const charity_count = await this.charity.charity_count()
		const count = await this.charity.charitys(charity_count)
		assert.equal(count.id.toNumber(), charity_count.toNumber())
		assert.equal(charity_count.toNumber(), 1)
	})

	/*it('creates charity', async () => {
		
		const result = await this.charity.createCharity('anand_new','A new charity',"bankacc","bankname","0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c","0000")
		const charity_count = await this.charity.charity_count()
		assert.equal(charity_count,2)
		const event = this.charity.charitys(result)
		assert.equal(event.id.toNumber(),2)
		assert.equal(event.description,'A new charity')
		assert.equal(event.name,'anand_new')
	})*/
})