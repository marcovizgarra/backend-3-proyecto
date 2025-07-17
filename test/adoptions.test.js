import chai from 'chai';
import supertest from 'supertest';
import app from '../src/app.js';

const expect = chai.expect;
const requester = supertest(app);

// IDs cargados en la DB de mongo
const validUserId = '64fc9a2e3e2b7b2f82ddda01';
const validPetId = '64fc9a2e3e2b7b2f82ddda02';
let createdAdoptionId = '';

describe('Adoption API', () => {

  describe('GET /api/adoptions', () => {
    it('debe obtener todas las adopciones', async () => {
      const res = await requester.get('/api/adoptions');
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('status', 'success');
      expect(res.body).to.have.property('payload').that.is.an('array');
    });
  });

  describe('POST /api/adoptions/:uid/:pid', () => {
    it('crea una adpción si los ID son correctos', async () => {
      const res = await requester.post(`/api/adoptions/${validUserId}/${validPetId}`);
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('status', 'success');
      expect(res.body).to.have.property('message', 'Pet adopted');

      const adoptionsRes = await requester.get('/api/adoptions');
      createdAdoptionId = adoptionsRes.body.payload.at(-1)?._id || '';
    });

    it('falla si se pasa un usuario inexistente', async () => {
      const res = await requester.post(`/api/adoptions/000000000000000000000000/${validPetId}`);
      expect(res.status).to.equal(404);
      expect(res.body).to.have.property('error', 'user Not found');
    });

    it('falla si la mascota no existe', async () => {
      const res = await requester.post(`/api/adoptions/${validUserId}/000000000000000000000000`);
      expect(res.status).to.equal(404);
      expect(res.body).to.have.property('error', 'Pet not found');
    });
  });

  describe('GET /api/adoptions/:aid', () => {
    it('obtener adopcion expecífica, con ID válido', async () => {
      if (!createdAdoptionId) return this.skip();

      const res = await requester.get(`/api/adoptions/${createdAdoptionId}`);
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('status', 'success');
      expect(res.body.payload).to.have.property('_id', createdAdoptionId);
    });

    it('debe fallar con un ID inexistente', async () => {
      const res = await requester.get('/api/adoptions/000000000000000000000000');
      expect(res.status).to.equal(404);
      expect(res.body).to.have.property('error', 'Adoption not found');
    });
  });
});
