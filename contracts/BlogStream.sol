// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.2;
import "@openzeppelin/contracts/utils/Counters.sol";

contract Blog{

using Counters for Counters.Counter;

Counters.Counter private _blogIdCounter;
struct blogPost {
    address author;
    string blogUri;
    uint flowRate;
    uint blogTokenId;
}

mapping(uint=>blogPost) private _blogIdToPost;
mapping(uint256=>string)private _blogIdToUri;
// blogPost[] blogPosts;
address owner = msg.sender;

modifier ownerOnly{
      require(msg.sender == owner);
      _;
  }
  function setBlogUri(uint _blogId, string memory _blogUri)internal {
      _blogIdToUri[_blogId] = _blogUri;
  }

  function postBlog(string memory _blogUri, uint _flowRate) public returns(uint){
     uint256 blogId = _blogIdCounter.current();
        _blogIdCounter.increment();
        _blogIdToPost[blogId] = blogPost(msg.sender, _blogUri, _flowRate, blogId);
        setBlogUri(blogId, _blogUri);
        return blogId;

  }

  function getBlogUri(uint _blogId)public view returns(string memory){
      string memory _blogUri = _blogIdToUri[_blogId];
      return _blogUri;
  }

  function getAuthor(uint _blogId)public view returns(string memory){

  }

  function getBlogCounter()public view returns(uint){
      uint256 counter = _blogIdCounter.current();
      return counter;
  }

  function totalCreated() public view returns (blogPost[] memory) {
        uint totalItemCount = _blogIdCounter.current();
        uint currentIndex = 0;
        
        blogPost[] memory items = new blogPost[](totalItemCount);
        for (uint i = 0; i < totalItemCount; i++) {
            
                uint currentId = i ;
                blogPost storage currentItem = _blogIdToPost[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            
        }
        return items;
    }

}




