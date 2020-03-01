// Use this file to write queries to test your data connector
let
    result = power_bi_connector.Contents("http://localhost:5002/api/order")
in
    result