import Ember from 'ember';

export function hasSpeakerInfo([ speker, item ] /*, hash*/) {
  return speaker.name == item.speaker || speaker.name == item.speaker2 || speaker.name == item.speaker3 || speaker.name == item.speaker4 || speaker.name == item.speaker5;
}

export default Ember.Helper.helper(hasSpeakerInfo);
