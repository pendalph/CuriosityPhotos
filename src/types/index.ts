/* eslint-disable camelcase */
export interface Photos {
    img_src: string;
    camera: Camera;
    earth_date: string;
    id: number;
    image_src: string;
    rover: Rover;
    sol: number;
}

export interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface Rover {
    id: number;
    landing_date: string;
    launch_date: string;
    name: string;
    status: string;
}
