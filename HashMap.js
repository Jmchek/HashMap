import LinkedList from "./LinkedList.js";

export default function HashMap() {
  const LOAD_FACTOR = 0.75;
  let buckets = new Array(16);
  let capacity = buckets.length;
  let entryCount = 0;

  for (let i = 0; i < buckets.length; i++){
    buckets[i] = LinkedList();
  }

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
    let index = h % buckets.length;

    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      return buckets[index];
    }
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

    //grow bucket
    if (entryCount >= capacity * LOAD_FACTOR){
      buckets.length += 8;
      capacity += 8;
      for (let i = capacity - 8; i < buckets.length; i++){
        if(buckets[i] === undefined){
          buckets[i] = LinkedList();
        }
      }
    }

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
    for (let i = 0; i < buckets.length; i++){
      buckets[i] = LinkedList();
    }
    entryCount = 0;
  }

  function keys() {
    let keyArr = [];
    for (let i = 0; i < buckets.length; i++){
      if(buckets[i].head() !== null){
        let current = buckets[i].head();

        while (current){
            keyArr.push(JSON.stringify(current.key));
            current = current.next;
        }
      }
    }

    return keyArr;
  }

  function values() {
    let valuesArr = [];
    for (let i = 0; i < buckets.length; i++){
      if(buckets[i].head() !== null){
        let current = buckets[i].head();

        while (current){
            valuesArr.push(JSON.stringify(current.value));
            current = current.next;
        }
      }
    }

    return valuesArr;
  }

  function entries() {
    console.log(buckets.length);
    let entryArr = [];
    for (let i = 0; i < buckets.length; i++){
      if(buckets[i].head() !== null){
        let current = buckets[i].head();

        while (current){
            entryArr.push(JSON.stringify([current.key, current.value]));
            current = current.next;
        }
      }
    }

    return entryArr;
  }
    
  return {has, set, get, remove, length, clear, keys, values, entries};
}