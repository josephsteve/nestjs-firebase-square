import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import 'firebase-functions';
admin.initializeApp();

export default () => ({
  config_value: functions.config().myconfig?.config_value || process.env.config_value,
  square_application_id:
    functions.config().square?.application_id || process.env.SQUARE_APPLICATION_ID,
  square_access_token: functions.config().square?.access_token || process.env.SQUARE_ACCESS_TOKEN,
  square_location_id: functions.config().square?.location_id || process.env.SQUARE_LOCATION_ID,
});
