import LinkedList from "./LinkedList.js";

export default function HashMap() {
  let buckets = new Array(16).fill(LinkedList());
  let entryCount = 0;

  // buckets[1].append({key: 'apple', value: 'red'});
  // console.log(buckets[1].find({key: 'apple', value: 'red'}));

  function hash(key) {
    let hashCode = 0;
        
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
  
    return hashCode;
  } 

  function bucket(key) {    
    let h = hash(key);
    return buckets[h % buckets.length];
  }

  function entry(bucket, key) {
    // for (let e of bucket) {
    //   if (e.contains(key)) {
    //     return e;
    //   }
    // }
    // let searchQuery = {key, value};
    // console.log(searchQuery);
    if (bucket.containsKey(key)) {
      console.log(bucket.findKeyIndex(key))
          return bucket.findKeyIndex(key);
        } else {
          return null;
        }
  }

  function set(key, value) {
    entryCount++;
    let b = bucket(key);
    let e = entry(b, key);
    console.log("this is e before = " + e);
    if (e !== null) {
      console.log("worked? here's e " + e);
      b.removeAt(e);
      b.insertAt(value, e);
      console.log("head = " + b.head());
      return;
    }
    b.append({ key, value });
    console.log("head = " + b.head());
  }

  function get(key) {
    let b = bucket(key);
    let e = entry(b, key);
    if (e) {
      return e.value;
    }
    return null;
  }

  function has(key) {
    let b = bucket(key);
    let e = entry(b, key);
    if (e){
      return true;
    }

    return false;
  }

  function remove(key) {
    let b = bucket(key);
    let e = entry(b, key);
    if(e){
      for (let i of b) {
        if (i.key === key) {
          b.splice(b.indexOf(i), 1);
          return true;
        }
      }
    }
    return false;
  }

  function length() {
    return entryCount;
  }

  function clear() {
    for (let i of buckets){
      i.splice(0, i.length);
    }
  }
    
  return {buckets, hash, has, bucket, set, get, entry, remove, length, clear};
}