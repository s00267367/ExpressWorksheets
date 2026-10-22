import request from "supertest";
import { app } from "../../src/app";
import { ObjectId } from "mongodb";

let carId : ObjectId;


describe('GET /cars', () => {

    it('returns all cars', async () => {

        const response = await request(app)
            .get('/api/v1/cars');

        expect(response.status).toBe(200);

    });

});

describe ('POST /cars', () => {

    it('creates a valid car', async () => {

        const response = await request(app)
            .post('/api/v1/cars')
            .send({body:{
                make: "Ford",
                model: "Focus",
                year: 2020
            }});


        expect(response.status).toBe(200);
        carId = response.body._id;
        console.log("Created car with ID:", carId);
    });

});

describe('GET /cars/:id', () => {
    it('returns a car by ID', async () => {

        const response = await request(app)
            .get(`/api/v1/cars/${carId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id', carId.toString());
    });
});

describe ('PUT /cars/:id', () => {

    it('updates a car by ID', async () => {
        const response = await request(app)
            .put(`/api/v1/cars/${carId}`)
            .send({
                make: "Toyota",
                model: "Camry",
                year: 2021
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('make', 'Toyota');
        expect(response.body).toHaveProperty('model', 'Camry');
        expect(response.body).toHaveProperty('year', 2021);
    });
});

describe('DELETE /cars/:id', () => {
    it('deletes a car by ID', async () => {
        const response = await request(app)
            .delete(`/api/v1/cars/${carId}`);
        expect(response.status).toBe(200);
    });
});
