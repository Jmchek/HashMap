import LinkedList from "./LinkedList.js";
import Node from "./Node.js";

export default function HashMap() {
  let buckets = new Array(16).fill([]);
console.log(buckets);
  let entryCount = 0;

  function bucket(key) {    
    let h = hash(key);
    return buckets[h % buckets.length];
  }

  function entry(bucket, key) {
    for (let e of bucket) {
      if (e.key === key) {
        return e;
      }
    }
    return null;
  }

  function set(key, value) {
    entryCount++;
    let b = bucket(key);
    let e = entry(b, key);
    if (e) {
      e.value = value;
      return;
    }
    b.push({ key, value });
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

  function hash(key) {
      let hashCode = 0;
          
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
    
      return hashCode;
    } 
    
  return {buckets, hash, has, bucket, set, get, entry, remove, length, clear};
}