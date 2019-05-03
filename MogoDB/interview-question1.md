## What are the best features of Mongodb?
Document-oriented
High performance
High availability
Easy scalability
Rich-query language

## What are NoSQL databases? What are the different types of NoSQL databases?
A NoSQL database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases (like SQL, Oracle, etc.).

## Types of NoSQL databases:

Document Oriented
Key Value
Graph
Column Oriented
What kind of NoSQL database MongoDB is?
MongoDB is a document oriented database. It stores data in the form of BSON structure based documents. These documents are stored in a collection.

## Which are the most important features of MongoDB?
Flexible data model in form of documents
Agile and highly scalable database
Faster than traditional databases
Expressive query language
What is a Namespace in MongoDB?
A Namespace is the concatenation of the database name and collection name. For e.g. school.students with school as the database and students as the collection

## Which all languages can be used with MongoDB?
Currently, MonggoDB provides official driver support for C, C++, C#, Java, Node.js, Perl, PHP, Python, Ruby, Scala, Go and Erlang. MongoDB can easily be used with any of these languages. There are some other community supported drivers too but the above mentioned ones are officially provided by MongoDB.

## Compare SQL databases and MongoDB at a high level.
SQL databases store data in form of tables, rows, columns and records. This data is stored in a pre-defined data model which is not very much flexible for today's real-world highly growing applications. MongoDB in contrast uses a flexible structure which can be easily modified and extended.

## How is MongoDB better than other SQL databases?
MongoDB allows a highly flexible and scalable document structure. For e.g. one data document in MongoDB can have five columns and the other one in the same collection can have ten columns. Also, MongoDB database are faster as compared to SQL databases due to efficient indexing and storage techniques.

## Compare MongoDB and CouchDB at high level.
Although both of these databases are document oriented, MongoDB is a better choice for applications which need dynamic queries and good performance on a very big database. On the other side, CouchDB is better used for applications with occasionally changing queries and pre-defined queries.

## Does MongoDB support foreign key constraints?
No. MongoDB does not support such relationships.

## Does MongoDB support ACID transaction management and locking functionalities?
No. MongoDB does not support default multi-document ACID transactions. However, MongoDB provides atomic operation on a single document.

## How can you achieve primary key - foreign key relationships in MongoDB?
By default MongoDB does not support such primary key - foreign key relationships. However, we can achieve this concept by embedding one document inside another. Foe e.g. an address document can be embedded inside customer document.

## Does MongoDB need a lot of RAM?
No. MongoDB can be run even on a small amount of RAM. MongoDB dynamically allocates and de-allocates RAM based on the requirements of other processes.

## Does MongoDB pushes the writes to disk immediately or lazily?
MongoDB pushes the data to disk lazily. It updates the immediately written to the journal but writing the data from journal to disk happens lazily.

## Explain the structure of ObjectID in MongoDB.
ObjectID is a 12-byte BSON type with:

4 bytes value representing seconds
3 byte machine identifier
2 byte process id
3 byte counter

## What is a Namespace in MongoDB?
A Namespace is the concatenation of the database name and collection name. For e.g. school.students with school as the database and students as the collection

## Which all languages can be used with MongoDB?
Currently, MonggoDB provides official driver support for C, C++, C#, Java, Node.js, Perl, PHP, Python, Ruby, Scala, Go and Erlang. MongoDB can easily be used with any of these languages. There are some other community supported drivers too but the above mentioned ones are officially provided by MongoDB.

## Compare SQL databases and MongoDB at a high level.
SQL databases store data in form of tables, rows, columns and records. This data is stored in a pre-defined data model which is not very much flexible for today's real-world highly growing applications. MongoDB in contrast uses a flexible structure which can be easily modified and extended.

## How is MongoDB better than other SQL databases?
MongoDB allows a highly flexible and scalable document structure. For e.g. one data document in MongoDB can have five columns and the other one in the same collection can have ten columns. Also, MongoDB database are faster as compared to SQL databases due to efficient indexing and storage techniques.

## Compare MongoDB and CouchDB at high level.
Although both of these databases are document oriented, MongoDB is a better choice for applications which need dynamic queries and good performance on a very big database. On the other side, CouchDB is better used for applications with occasionally changing queries and pre-defined queries.

## Does MongoDB support foreign key constraints?
No. MongoDB does not support such relationships.

## Does MongoDB support ACID transaction management and locking functionalities?
No. MongoDB does not support default multi-document ACID transactions. However, MongoDB provides atomic operation on a single document.

## How can you achieve primary key - foreign key relationships in MongoDB?
By default MongoDB does not support such primary key - foreign key relationships. However, we can achieve this concept by embedding one document inside another. Foe e.g. an address document can be embedded inside customer document.

## Does MongoDB need a lot of RAM?
No. MongoDB can be run even on a small amount of RAM. MongoDB dynamically allocates and de-allocates RAM based on the requirements of other processes.

## Does MongoDB pushes the writes to disk immediately or lazily?
MongoDB pushes the data to disk lazily. It updates the immediately written to the journal but writing the data from journal to disk happens lazily.

## Explain the structure of ObjectID in MongoDB.
ObjectID is a 12-byte BSON type with:

4 bytes value representing seconds
3 byte machine identifier
2 byte process id
3 byte counter

## MongoDB uses BSON to represent document structures. True or False?
True

## If you remove a document from database, does MongoDB remove it from disk?
Yes. Removing a document from database removes it from disk too.

## Mention the command to insert a document in a database called school and collection called persons.
use school;
db.persons.insert( { name: "kadhir", dept: "CSE" } )
What are Indexes in MongoDB?
Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan, i.e. scan every document in a collection, to select those documents that match the query statement. If an appropriate index exists for a query, MongoDB can use the index to limit the number of documents it must inspect.

## How many indexes does MongoDB create by default for a new collection?
By default, MongoDB created the _id collection for every collection.

## WCan you create an index on an array field in MongoDB? If yes, what happens in this case?
Yes. An array field can be indexed in MongoDB. In this case, MongoDB would index each value of the array.

## WWhat is a covered query in MongoDB?
A covered query is the one in which:

## Wfields used in the query are part of an index used in the query, and
the fields returned in the results are in the same index
Why is a covered query important?
Since all the fields are covered in the index itself, MongoDB can match the query condition as well as return the result fields using the same index without looking inside the documents. Since indexes are stored in RAM or sequentially located on disk, such access is a lot faster.

## WDoes MongoDB provide a facility to do text searches? How?
Yes. MongoDB supports creating text indexes to support text search inside string content. This was a new feature which can introduced in version 2.6.

## WWhat happens if an index does not fit into RAM?
If the indexes do not fit into RAM, MongoDB reads data from disk which is relatively very much slower than reading from RAM.

## WMention the command to list all the indexes on a particular collection.
db.collection.getIndexes()
At what interval does MongoDB write updates to the disk?
By default configuration, MongoDB writes updates to the disk every 60 seconds. However, this is configurable with the commitIntervalMs and syncPeriodSecs options.

## WHow can you achieve transaction and locking in MongoDB?
To achieve concepts of transaction and locking in MongoDB, we can use the nesting of documents, also called embedded documents. MongoDB supports atomic operations within a single document.

## WWhat is Aggregation in MongoDB?
Aggregations operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result. MongoDB provides three ways to perform aggregation: the aggregation pipeline, the map-reduce function, and single purpose aggregation methods and commands.

## WWhat is Sharding in MongoDB? Explain.
Sharding is a method for storing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations.

## WWhat is Replication in MongoDB? Explain.
Replication is the process of synchronizing data across multiple servers. Replication provides redundancy and increases data availability. With multiple copies of data on different database servers, replication protects a database from the loss of a single server. Replication also allows you to recover from hardware failure and service interruptions.

## WWhat are Primary and Secondary Replica sets?
Primary and master nodes are the nodes that can accept writes. MongoDB's replication is 'single-master:' only one node can accept write operations at a time.

## WSecondary and slave nodes are read-only nodes that replicate from the primary.

## WBy default, MongoDB writes and reads data from both primary and secondary replica sets. True or False.
False. MongoDB writes data only to the primary replica set.

## WWhy are MongoDB data files large in size?
MongoDB preallocates data files to reserve space and avoid file system fragmentation when you setup the server.

## When should we embed one document within another in MongoDB?
You should consider embedding documents for:

'contains' relationships between entities
One-to-many relationships
Performance reasons

## Why MongoDB is not preferred over a 32-bit system?
When running a 32-bit build of MongoDB, the total storage size for the server, including data and indexes, is 2 gigabytes. For this reason, do not deploy MongoDB to production on 32-bit machines.

If you're running a 64-bit build of MongoDB, there's virtually no limit to storage size.

## What is a Storage Engine in MongoDB
A storage engine is the part of a database that is responsible for managing how data is stored on disk. For example, one storage engine might offer better performance for read-heavy workloads, and another might support a higher-throughput for write operations.

## Which are the two storage engines used by MongoDB?
MongoDB uses MMAPv1 and WiredTiger.