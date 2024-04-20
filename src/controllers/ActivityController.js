import { Activity } from '../models/Activity';

export class ActivityController {
  static async getActivity() {
    const response = await fetch('https://www.boredapi.com/api/activity/');
    const data = await response.json();
    console.log(data);
    return new Activity(
      data.activity,
      data.type,
      data.participants,
      data.link
    );
  }
}