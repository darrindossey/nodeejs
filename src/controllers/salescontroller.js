var routes = module.exports = {};

var orders = [
    {
        "OrderNumber" : "1000",
        "OrderDate" : "10/31/2018",
        "Customer" : {
            "Name" : "Guardline, Inc.",
            "BillingAddress" : {
                "Street1" : "1001 Progress Dr",
                "Street2" : "",
                "City" : "Atlanta",
                "State" : "TX",
                "Zip" : "75551"
            },
            "ShippingAddress" : {
                "Street1" : "1002 Progress Dr",
                "Street2" : "",
                "City" : "Atlanta",
                "State" : "TX",
                "Zip" : "75551"
            }
        },
        "Salesman" : "3000",
        "Commission" : "0",

        "CreateDate" : "07-18-2019",
        "CreateUser" : ""
    }

];

routes.index = function(req, res) {
    res.send("Sales");
};