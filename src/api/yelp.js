import axios from "axios"

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer AXikt6Ukv9GdHoKxttYZn-ZaxfSch0_LuD1GDoxgf_WkmYozR0Y8A34BU6VPNHFMkJvgTu15Teja1ksd4dfBXXjTbIKnwRKh_uE7ZOZmKHEz53khVrC9O6UVxP1kYHYx'
    }
})