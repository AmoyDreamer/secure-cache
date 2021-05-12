# secure-cache
A library of cache based on [memory-cache](https://github.com/ptarjan/node-cache) that supports Node.js.

## Install
### Using npm
```bash
npm install secure-cache --save
```

## Usage
### Node.js usage
```
const cache = require('secure-cache');
cache.get('test')//get cache data of key 'test'
cache.set('test', 123)//set cache data of key 'test', cache time is default value 3600000, unit is ms.
cache.remove('test')//remove cache data of key 'test'
```

## Method
### get cache data from memory
cache.get(key)
- key => {String} cache key.(required)
- return value => {Ant} cache data

### set cache data to memory
cache.set(key, value, time)
- key => {String} cache key.(required)
- value => {Any} cache data.(required)
- time => {Number} cache time, unit is ms, default value is 3600000, that means 60 minutes.(optional)

### remove cache data from memory
cache.remove(key)
- key => {String} cache key.(required)
- return value => {Boolean} whether the cache was removed successfully

### clear all cache data from memory
cache.clear()

## License
secure-cache is [MIT licensed](https://github.com/AmoyDreamer/secure-cache/blob/master/LICENSE).
