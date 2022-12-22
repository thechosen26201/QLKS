import { httpClient } from "./httpClient";

const END_POINT = '/Room';

const getAllRooms = () => {
    httpClient.get(END_POINT);
    console.log(httpClient.get(END_POINT));
};
// you can pass arguments to use as request parameters/data
const getRoomByHotelID = (hotel_id) => httpClient.get(END_POINT, { hotel_id });
// maybe more than one..

export default {
    getAllRooms,
    getRoomByHotelID
}