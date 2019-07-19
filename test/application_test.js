var expect = require("chai").expect;
var assert = require("chai").assert;
var request = require("request");

var application = require("../src/application");

describe("Application Test", function() {

    describe("Get Router", function() {

        var url = "http://localhost:3000";

        it("returns status 200", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe("app.init()", function() {
        it("initializes application", function() {
            assert.isFunction(application.init, "Should be a function");
        });
    });

    describe("app.init()", function() {
        it("config is array", function() {
            assert.isArray(application.config, "Should be an array");
        });
    });


});