/**
 * Created Storage class as Singleton design pattern 
 * to avoid repeat localStorage methods in all code.
 * 
 * Also, if we can change to another storage, we only have
 * to change in one place.
 * 
 * Now, we can implement methods than native storage don't have
 */

class Storage {
  constructor(storage) {
    this.storage = storage;
  }
  
  setMultiple(pairs) {
    if(typeof pairs !== 'object')
      throw new Error('storage.setMultiple only can receive an object of key-pairs: {key: "value", key2: "value2"}');

    Object.entries(pairs).forEach(([key, item]) => this.set(key, item));
  };

  set(key, item) {;
    this.storage.setItem(String(key), JSON.stringify(item));
  };
  
  get(key) {
    return JSON.parse(this.storage.getItem(String(key)));
  };

  remove() {
    const keys = Array.from(arguments);
    keys.forEach(key => this.storage.removeItem(key));
  }
};

const storage = new Storage(localStorage);

export default storage;