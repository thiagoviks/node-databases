var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "maki",
  password: "testingMySQL",
  database: "testDB"
});

//CREATE TABLE
/*
con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql,  (err, result) => {
    if (err) throw err;
    console.log("Table created");
  });
  con.end();
}); 
*/

//IF TABLE ALREADY EXISTS

/*
con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, (err, result)=> {
    if (err) throw err;
    console.log("Table altered");
  });
  con.end();
}); 
*/

//INSERT INTO TABLE
/*
con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("1 record inserted");
  });
  con.end();
});
*/

//INSERT MULTIPLE RECORDS
/*
con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  con.query(sql, [values], (err, result) => {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  con.end();
});
*/

//GET INSERTED ID
/*
con.connect((err) =>{
  if (err) throw err;
  var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
  con.end();
});
*/

//SELECTING FROM A TABLE
/*
con.connect((err) => {
  if (err) throw err;
  con.query("SELECT * FROM customers", (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
  con.end();
});
*/

//SELECTING COLUMNS
/*
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers",  (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
  con.end();
});
*/

//THE FIELDS OBJECT
/*
con.connect((err) => {
  if (err) throw err;
  con.query("SELECT name, address FROM customers",  (err, result, fields) => {
    if (err) throw err;
    console.log(fields);
  });
  con.end();
});
*/

//SELECT WITH A FILTER
/*
con.connect((err) => {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", (err, result) =>{
    if (err) throw err;
    console.log(result);
  });
  con.end();
});
*/

//WILDCARD CHARACTERS
/*
con.connect((err) => {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'",(err, result) => {
    if (err) throw err;
    console.log(result);
  });
  con.end();
});
*/

//ESCAPING QUERY VALUES
/*
//METHOD 1
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, (err, result) => {
  if (err) throw err;
  console.log(result);
});
con.end();
*/

/*
//METHOD 2 USING PLACEHOLDER
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ?';
con.query(sql, [adr], (err, result) => {
  if (err) throw err;
  console.log(result);
});
con.end();
*/

/*
//MRTHOD 3 USING MULTIPLE PLACEHOLDER
var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], (err, result) => {
  if (err) throw err;
  console.log(result);
});
con.end();
*/

//SORT THE RESULT
/*
con.connect((err) =>{
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  con.end();
});
*/

/*
//ORDER BY DESC
con.connect((err) => {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name DESC", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  con.end();
});
*/

/*
//DELETE RECORD
con.connect((err) => {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
  con.end();
});
*/

//DELETE A TABLE 
/*
con.connect((err) =>{
  if (err) throw err;
  var sql = "DROP TABLE customers";
  con.query(sql,(err, result) => {
    if (err) throw err;
    console.log("Table deleted");
  });
  con.end();
});
*/

/*
//DROP ONLY IF EXIST
con.connect((err) => {
  if (err) throw err;
  var sql = "DROP TABLE IF EXISTS customers";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  con.end();
});
*/

//UPDATE TABLE
/*
con.connect((err) => {
  if (err) throw err;
  var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
  con.end();
});
*/

/*
//LIMIT THE RESULT
con.connect((err) => {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  con.end();
});
*/

//START FROM ANOTHER POSITION
/*
con.connect((err) => {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  con.end();
});
*/

//SHORTER SYNTAX
/*
con.connect((err) => {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 2, 5";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  con.end();
});
*/

