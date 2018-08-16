var chai = require('chai'),
    expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things')); // Don't swap these two

var request = require('request');

it('check content', function (done) {
    request('http://localhost:8080/check', function (error, response, body) {
        // expect(body).to.have.deep.members([{a:1}]);
        // expect(body).to.have.keys(['a', 'b']); // passes
        expect(body).to.include('{"a":1,"b":2}');
        expect(200,done);
        done();
    });
});


// example with some more tests that will check the status
//  it('Main page content', function(done) {
//     request('http://localhost:8080' , function(error, response, body) {
//         expect(body).to.equal('Hello World');
//         done();
//     });
// });
/*
it('Main page status', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('About page content', function(done) {
    request('http://localhost:8080/about' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
}); */


/* Grouping tests A very useful feature in Mocha is describe(), a function that allows you to better 
control your tests by grouping them:
 */
describe('Status and content', function () {
    describe('Main page', function () {
        it('status', function (done) {
            request('http://localhost:8080/test', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(response.body).to.equal('Hello test');

                done();
            });
        });

        // it('content', function(done) {
        //     request('http://localhost:8080/' , function(error, response, body) {
        //         expect(body).to.equal('Hello World');
        //         done();
        //     });
        // });
    });

    // describe ('About page', function() {
    //     it('status', function(done){
    //         request('http://localhost:8080/about', function(error, response, body) {
    //             expect(response.statusCode).to.equal(404);
    //             done();
    //         });
    //     });

    // });
});