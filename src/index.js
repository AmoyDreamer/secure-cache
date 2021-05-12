"use strict"
/**
 * @author Allen Liu
 * @desc A library of cache based on memory-cache that supports Node.js.
 */
const cache = require('memory-cache')

module.exports = {
    /**
     * @desc get cache
     * @param {String} key cache key.(required)
     */
    get: (key) => {
        return cache.get(key)
    },
    /**
     * @desc set cache
     * @param {String} key cache key.(required)
     * @param {Any} value cache data.(required)
     * @param {Number} time cache time, unit is ms, default value is 3600000, that means 60 minutes.(optional)
     */
    set: (key, value, time=3600000) => {
        cache.put(key, value, time)
    },
    /**
     * @desc remove cache
     * @param {String} key cache key.(required)
     */
    remove: (key) => {
        return cache.del(key)
    },
    /**
     * @desc clear all cache
     */
    clear: () => {
        cache.clear()
    }
}
