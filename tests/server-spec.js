const chai = require('chai')
const {expect} = chai
const chaiHttp = require('chai-http')
const app = require('../server')


chai.use(chaiHttp);
chai.should();

describe("Server", () => {
    describe("GET /", () => {
        it("should have a default route", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
        it("should get all gene variants", (done) => {
             chai.request(app)
                 .get(`/api/v1/variants/`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         
        it("should get a single gene variant", (done) => {
             const id = "CRYAB";
             chai.request(app)
                 .get(`/api/v1/variants/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     expect(res.body["Gene"]).to.equal(id)
                     done();
                  });
         });

         it("should not get a single gene variant when given bad gene", (done) => {
            const id = "CRYABAB";
            chai.request(app)
                .get(`/api/v1/variants/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    expect(res.body["Gene"]).to.equal(undefined)
                    done();
                 });
        });

        it("should return some gene variants that have id included", (done) => {
            const id = "CRY";
            chai.request(app)
                .get(`/api/v1/${id}/suggest`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    for(let i = 0; i < res.body.length; i++){
                        expect(res.body[i].includes(id))
                    }
                    done();
                 });
        });
    });
});