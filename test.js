import supertest from "supertest";
import server from './server.js'

const request = supertest(server);

describe('Que funcione el server', () => {
    test('Server return 200', async () => {
        await supertest(server).get('/').expect(200);
    });
});

describe(('CRUD Read : GET /user'), () => {
    test('(then) Deberia respoder status code 200', async () => {
        const response = await request.get("/users/read").send();
        expect(response.statusCode).toBe(200);
    })

    test('(then) Deberia tener username en el json request', async () => {
        const response = await request.get("/users/read").send();
        expect(response.body.username).toBeDefined();
    })

    test('(then) Deberia tener timestamp en el json request', async () => {
        const response = await request.get("/users/read").send();
        expect(response.body.timestamp).toBeDefined();
    })
})

describe(('CRUD Create : POST /user'), () => {
    test('(then) Deberia respoder status code 200', async () => {
        const response = await request.post("/users/create").send();
        expect(response.statusCode).toBe(200);
    })

    test('(then) Deberia devolver un content-type json', async () => {
        await request.post("/users/create").send({username:"new"}).expect("Content-type", /json/);
    })

    test('(then) Deberia tener username en el json request', async () => {
        const response = await request.post("/users/create").send({username:"new"});
        expect(response.body.username).toBeDefined();
    })
})

describe(('CRUD Update : PUT /user'), () => {
    test('(then) Deberia respoder status code 200', async () => {
        const response = await request.put("/users/update").send();
        expect(response.statusCode).toBe(200);
    })

    test('(then) Deberia devolver con username y password', async () => {
        const response = await request.put("/users/update").send({username:"Pomelo",password:456});
        expect(response.body.username).toBeDefined();
        expect(response.body.password).toBeDefined();
    })

    test('(then) Deberia devolver con password actualizado', async () => {
        const response = await request.put("/users/update").send({username:"Pomelo",password:456});
        expect(response.body.password).toBe(456);
    })
})

describe(('CRUD Delete : DELETE /user'), () => {
    test('(then) Deberia respoder status code 200', async () => {
        const response = await request.delete("/users/delete").send();
        expect(response.statusCode).toBe(200);
    })

    test('(then) Deberia devolver con username y active', async () => {
        const response = await request.delete("/users/delete").send({username:"Pomelo"});
        expect(response.body.username).toBeDefined();
        expect(response.body.active).toBeDefined();
    })

    test('(then) Deberia devolver activo false', async () => {
        const response = await request.delete("/users/delete").send({username:"Pomelo"});
        expect(response.body.active).toBe(false);
    })
})
