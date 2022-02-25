const { expect } = require('chai')
const { ethers } = require('hardhat')

//test: to check if blogs are getting created
describe('Blog', async function () {
  it('Should create a blog post', async function () {
    const Blogstream = await ethers.getContractFactory('Blog')
    const blogstream = await Blogstream.deploy()
    await blogstream.deployed()
    await blogstream.postBlog('My first post uri', '12345678')
    const posts = await blogstream.totalCreated()
    expect(posts[0].blogUri).to.equal('My first post uri')
    expect(posts[0].blogUri).to.equal('12345678')
  })
})
