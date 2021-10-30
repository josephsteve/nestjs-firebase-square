import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import 'firebase-functions';
admin.initializeApp();

export default () => ({
  config_value: functions.config().myconfig.config_value,
});
