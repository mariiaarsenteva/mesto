export default class UserInfo {
  constructor(profileNameSelector, profileJobSelector, profileAvatarSelector) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._profileAvatar = document.querySelector(profileAvatarSelector);
    }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
  }

  setUserInfo({name, job, avatar}) {
    this._profileName.textContent = name;
    this._profileJob.textContent = job;
    this._profileAvatar.src = avatar;
  }

  setId (id) {
    this._id = id;
  }

  getId () {
    return this._id;
  }
}
