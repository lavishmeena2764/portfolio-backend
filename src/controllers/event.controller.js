import {
  response_200,
  response_500,
} from '../utils/responseCodes.js';
import Event from '../models/event.model.js';


export async function getEvent(req, res) {
  try {
    const finalResult = await Event.find({});
    return response_200(res, 'Fetched all events!!', finalResult);
  } catch (error) {
    return response_500(res, 'Internal server error', error);
  }
}
