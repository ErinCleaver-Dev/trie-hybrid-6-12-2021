class TrieHybrid {
  constructor() {
    this.next = {};
    this.value = '';
  }

  insert(str, i = 0) {
    // inserts a trie 
    if(i === str.length) {
      return;
    }
    
    this.next = new TrieHybrid()
    this.value = str[i];
    this.next.insert(str, i+ 1)
  }
}

let trieHybrid = new TrieHybrid()

trieHybrid.insert('snake')

console.log(JSON.stringify(trieHybrid))