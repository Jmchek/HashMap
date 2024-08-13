import LinkedList from "./LinkedList.js";

export default function HashMap() {
  let buckets = new Array(16).fill(LinkedList());
  let entryCount = 0;

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
    if (bucket.containsKey(key)) {
          return bucket.findKeyIndex(key);
        } else {
          return null;
        }
  }

  function set(key, value) {
    let b = bucket(key);
    let e = entry(b, key);
    let data = {key, value};
    if (e !== null) {
      b.removeAt(e);
      b.insertAt(data, e);
      return;
    }
    b.append(data);
    entryCount++;
  }

  function get(key) {
    let b = bucket(key);
    let e = entry(b, key);
    if (e !== null) {
      return b.at(e).value;
    }
    return null;
  }

  function has(key) {
    let b = bucket(key);
    let e = entry(b, key);

    if (e >= 0 && e !== null){
      return true;
    }

    return false;
  }

  function remove(key) {
    let b = bucket(key);
    let e = entry(b, key);
    if (e !== null){
      b.removeAt(e);
      return true;
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