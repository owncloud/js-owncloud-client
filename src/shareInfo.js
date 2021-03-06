/* jshint camelcase: false */

/**
 * @class ShareInfo
 * @classdesc ShareInfo class, stores information regarding a share
 * @param {object} ShareInfo containing information like id, url etc. of the share
 */
class ShareInfo {
  constructor (shareInfo) {
    this.shareInfo = {}

    // Below keys don't need to be stored
    const notNeededKeys = ['item_type', 'item_source', 'file_source', 'parent', 'storage', 'mail_send']

    for (const key in shareInfo) {
      if (!(key in notNeededKeys)) {
        this.shareInfo[key] = shareInfo[key]
      }
    }
  }

  /**
   * Gets the ID of share
   * @returns {number} ID of share
   */
  getId () {
    return this._getInt('id')
  }

  /**
   * Gets share type of share
   * @returns {number} Share type of share
   */
  getShareType () {
    return this._getInt('share_type')
  }

  /**
   * Gets shareWith of the share
   * @returns {string|null} shareWith of share
   */
  getShareWith () {
    if (Object.prototype.hasOwnProperty.call(this.shareInfo, 'share_with')) {
      return this.shareInfo.share_with
    }
    return null
  }

  /**
   * Gets display name of share
   * @returns {string|null} display name of share
   */
  getShareWithDisplayName () {
    if (Object.prototype.hasOwnProperty.call(this.shareInfo, 'share_with_displayname')) {
      return this.shareInfo.share_with_displayname
    }
    return null
  }

  /**
   * Gets path of share
   * @returns {string} Path of share
   */
  getPath () {
    if (Object.prototype.hasOwnProperty.call(this.shareInfo, 'path')) {
      return this.shareInfo.path
    }
    return null
  }

  /**
   * Gets permissions of share
   * @returns {number} permissions of share
   */
  getPermissions () {
    return this._getInt('permissions')
  }

  /**
   * Gets share time of share
   * @returns {number} Share time of share
   */
  getShareTime () {
    this._getInt('stime')
  }

  /**
   * Gets expiration time of share
   * @returns {number} Expiration time of share
   */
  getExpiration () {
    return this._getInt('expiration') || null
  }

  /**
   * Gets token of share
   * @returns {string|null} token of share
   */
  getToken () {
    if (Object.prototype.hasOwnProperty.call(this.shareInfo, 'token')) {
      return this.shareInfo.token
    }
    return null
  }

  /**
   * Gets link of share
   * @returns {string|null} Link of share
   */
  getLink () {
    if (Object.prototype.hasOwnProperty.call(this.shareInfo, 'url')) {
      return this.shareInfo.url
    }
    return null
  }

  /**
   * Gets UID owner of share
   * @returns {string|null} UID owner of share
   */
  getUidOwner () {
    if (Object.prototype.hasOwnProperty.call(this.shareInfo, 'uid_file_owner')) {
      return this.shareInfo.uid_file_owner
    }
    return null
  }

  /**
   * Gets name of owner of share
   * @returns {string|null} name of owner of share
   */
  getDisplaynameOwner () {
    if (Object.prototype.hasOwnProperty.call(this.shareInfo, 'displayname_file_owner')) {
      return this.shareInfo.displayname_file_owner
    }
    return null
  }

  /**
   * Gets name of share
   * @returns {string|null} name of share
   */
  getName () {
    if (Object.prototype.hasOwnProperty.call(this.shareInfo, 'name')) {
      return this.shareInfo.name
    }
    return null
  }

  /**
   * Typecasts to integer
   * @param   {string}    [key]   Corresponding key element to be typecasted to an integer
   * @returns {number}           typecasted integer
   */
  _getInt (key) {
    return parseInt(this.shareInfo[key])
  }
}

module.exports = ShareInfo
