var expect = require("chai").expect;
var assert = require("chai").assert;
var request = require("request");

describe("Application Test", function() {

    describe("Get Router", function() {

        var url = "http://localhost:3000/sales";

        it("returns status 200", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe("New Order", function() {

        it("Returns status code 200", function(done) {
            var url = "http://localhost:3000/sales/neworder";
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

});